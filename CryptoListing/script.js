(function () {
    const crypto = {
        searchBox: document.querySelector("input[type=search]"),
        list: document.querySelector("table tbody"),
        viewMore: document.querySelector(".view-more"),
        chart: document.createElement("div"),
        chartContainer: document.createElement("td"),
        loader: document.querySelector('.loader'),
        URL: "https://api.coincap.io/v2/assets/",
        limit: 5,
        initialLimit: 5,
        searchBy: '',
        async fetch(URL) {
            try {
                if (this.loader) {
                    this.loader.style.display = 'flex';
                }
                const response = await fetch(URL);
                if (!response.ok) {
                    throw new Error(`Failed to  fetch data: ${response.status}`);
                }
                const jsonResponse = await response.json();
                this.loader.style.display = 'none';
                return jsonResponse.data;
            } catch (error) {
                this.error404();
                this.loader.style.display = 'none';
            }
        },
        async getCoins(URL) {
            try {
                const coins = await this.fetch(URL);
                this.searchBy = coins;
                this.render(coins)
            } catch (error) {
                console.log("Nothing to Show!");
            }
        },
        error404() {
            const NEXT = -1;
            this.list.innerHTML = '';
            const row = this.list.insertRow(NEXT);
            const error = row.insertCell(NEXT)
            const image = document.createElement('img');
            image.src = 'images/nothing.JPG';
            image.alt = 'Nothing to show';
            error.append(image);
            error.colSpan = '8';
            error.classList.add('error')
        },
        render(coins) {
            const coinsl = coins.slice(0, this.limit);
            this.list.innerHTML = "";
            coinsl.forEach((coin) => {
                const NEXT = -1;
                row = this.list.insertRow(NEXT);
                row.insertCell(NEXT).textContent = coin.rank;
                row.insertCell(NEXT).append(this.createName(coin.name, coin.symbol));
                row.insertCell(NEXT).textContent = `${this.numberToCurrency(coin.priceUsd)}`;
                row.insertCell(NEXT).textContent = `${this.convertTo(coin.marketCapUsd)}`;
                row.insertCell(NEXT).textContent = `${this.numberToCurrency(coin.vwap24Hr)}`;
                row.insertCell(NEXT).textContent = `${this.convertTo(coin.supply)}`;
                row.insertCell(NEXT).textContent = `${this.convertTo(coin.volumeUsd24Hr)}`;
                const last = row.insertCell(NEXT)
                last.textContent = `${Number(coin.changePercent24Hr).toFixed(2)}%`;
                if (Math.sign(coin.changePercent24Hr) < 0) {
                    last.style.color = 'red';
                } else {
                    last.style.color = 'green'
                }
            });
        },
        numberToCurrency(number) {
            number = Number(number);
            if (!number || typeof number != "number") return "";
            return new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "USD",
            }).format(number);
        },
        convertTo(price) {
            price = Number(price);
            if (!price || typeof price != "number") return "";
            return `$${Math.abs(Number(price)) >= 1.0e12
                ? (Math.abs(Number(price)) / 1.0e12).toFixed(2) + "t"
                : Math.abs(Number(price)) >= 1.0e9
                    ? (Math.abs(Number(price)) / 1.0e9).toFixed(2) + "b"
                    : Math.abs(Number(price)) >= 1.0e6
                        ? (Math.abs(Number(price)) / 1.0e6).toFixed(2) + "m"
                        : Math.abs(Number(price)) >= 1.0e3
                            ? (Math.abs(Number(price)) / 1.0e3).toFixed(2) + "k"
                            : Math.abs(Number(price))
                }`;
        },
        createName(name, symbol) {
            let image, container, containerText, heading, para;
            image = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`;
            container = document.createElement("div");
            containerText = document.createElement("div");
            heading = document.createElement("h4");
            para = document.createElement("span");
            container.classList.add("coin-data");
            const img = document.createElement("img");
            img.src = image ?? "";
            img.alt = symbol;
            heading.innerText = name;
            para.innerText = symbol;
            containerText.append(heading, para);
            container.append(img, containerText);
            return container;
        },
        search(value) {
            if (!this.searchBox) return;
            let coinToBeSearched;
            const searchMore = () => {
                if (this.searchBy) {
                    let searched = [];
                    this.list.innerHTML = ''
                    this.searchBy.forEach((coin) => {
                        if (coin.name.toUpperCase().includes(coinToBeSearched)) {
                            searched.push(coin);
                            searched = [... new Set(searched)];
                        }
                    })
                    if (this.searchBox.value == '') {
                        this.limit = this.initialLimit;
                        this.getCoins(this.URL)
                    }
                    this.render(searched)
                }
            }
            if (value) {
                coinToBeSearched = value.toUpperCase();
                searchMore();
            }
            this.searchBox.addEventListener('keyup', (e) => {
                coinToBeSearched = e.target.value.toUpperCase();
                searchMore()
            })
        },
        listCoin() {
            if (!this.viewMore) return;
            this.getCoins(this.URL);
            this.viewMore.addEventListener("click", () => {
                this.limit = this.limit + 5;
                if (!this.searchBox.value) {
                    this.initialLimit = this.limit;
                    this.getCoins(this.URL);
                }
                this.search(this.searchBox.value);
            });
            this.graph();
            this.search()
        },
        async creatingChart(div, id) {
            const history = await this.fetch(`${this.URL}${id}/history?interval=m1`);
            if (!history) return;
            var dataPoints = [];
            var chart = await new CanvasJS.Chart(div, {
                theme: "light2",
                animationEnabled: true,
                zoomEnabled: true,
                toolTip: {
                    shared: true,
                },
                data: [
                    {
                        type: "area",
                        name: "Price",
                        radius: "15px",
                        color: "green",
                        xValueFormatString: "MMM DD,YYYY - HH:mm",
                        xValueType: "dateTime",
                        dataPoints: dataPoints,
                    },
                ],
            });

            for (var i = 0; i < history.length; i++) {
                dataPoints.push({
                    x: history[i].time,
                    y: Number(history[i].priceUsd),
                });
            }
            chart.render();
        },
        graph() {
            if (!this.list) return;
            this.chartContainer.colSpan = "8";
            this.chart.id = "chartContainer";
            this.list.addEventListener("click", (e) => {
                this.chartContainer.style.opacity = '0'
                if (e.target.tagName == 'TD') {
                    const activeElem = e.target.parentElement;
                    const searchCoin = activeElem.firstElementChild.innerHTML;
                    const coin = this.searchBy.find(coin => coin.rank == searchCoin);
                    this.creatingChart(this.chart, coin.id);
                    this.chartContainer.append(this.chart);
                    activeElem.classList.toggle("visible");
                    if (activeElem.classList.contains("visible")) {
                        activeElem.insertAdjacentElement("afterend", this.chartContainer);
                        this.loader.style.display = 'flex';
                        setTimeout(() => {
                            this.chartContainer.style.opacity = '1';
                            this.loader.style.display = 'none';
                        }, 2000);
                    } else {
                        this.chartContainer.remove();
                    }
                }
            });
        },
    };
    // setInterval(() => {
    //     console.log('k');
    crypto.listCoin();
    // }, 5000);
})();
