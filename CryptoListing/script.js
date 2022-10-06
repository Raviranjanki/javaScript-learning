(function () {
    const crypto = {
        searchBox: document.querySelector("input[type=search]"),
        list: document.querySelector("table tbody"),
        viewMore: document.querySelector(".view-more"),
        chart: document.createElement("div"),
        chartContainer: document.createElement("td"),
        loader: document.querySelector('.loader'),
        data: 20,
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
                this.loader.style.display = 'none';
                const jsonResponse = await response.json();
                return jsonResponse.data;
            } catch (error) {
                console.log(error);
            }
        },
        async getCoins() {
            const URL = "https://api.coincap.io/v2/assets";
            try {
                const coins = await this.fetch(URL);
                this.searchBy = coins;
                const coinsl = coins.slice(0, this.data);
                this.list.innerHTML = "";
                coinsl.forEach((coin) => {
                    this.render(coin);
                });
            } catch (error) {
                console.log("Nothing to Show!", error);
            }
        },
        render(coin) {
            const NEXT = -1;
            row = this.list.insertRow(NEXT);
            row.insertCell(NEXT).textContent = coin.rank;
            row.insertCell(NEXT).append(this.createName(coin.name, coin.symbol));
            row.insertCell(NEXT).textContent = `${this.numberToCurrency(coin.priceUsd)}`;
            row.insertCell(NEXT).textContent = `${this.convertTo(coin.marketCapUsd)}`;
            row.insertCell(NEXT).textContent = `${this.numberToCurrency(coin.vwap24Hr)}`;
            row.insertCell(NEXT).textContent = `${this.convertTo(coin.supply)}`;
            row.insertCell(NEXT).textContent = `${this.convertTo(coin.volumeUsd24Hr)}`;
            row.insertCell(NEXT).textContent = `${Number(coin.changePercent24Hr).toFixed(2)}%`;
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
        listCoin() {
            if (!this.viewMore) return;
            this.getCoins();
            this.viewMore.addEventListener("click", () => {
                this.data = this.data + 20;
                this.getCoins("https://api.coincap.io/v2/assets");
            });
            this.graph();

            if (!this.searchBox) return;
            let coinToBeSearched;
            this.searchBox.addEventListener('keyup', (e) => {
                coinToBeSearched = e.target.value.toUpperCase();
                if (this.searchBy) {
                    this.list.innerHTML = ''
                    this.searchBy.forEach(coin => {
                        if (coin.name.toUpperCase().includes(coinToBeSearched)) {
                            this.render(coin)
                        }
                    })
                    if (coinToBeSearched == '') {
                        this.getCoins()
                    }
                }
            })
        },
        async creatingChart(div, id) {
            const history = await this.fetch(`https://api.coincap.io/v2/assets/${id}/history?interval=m1`);
            var dataPoints = [];
            var chart = new CanvasJS.Chart(div, {
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

            const data = history
            for (var i = 0; i < data.length; i++) {
                dataPoints.push({
                    x: data[i].time,
                    y: Number(data[i].priceUsd),
                });
            }
            chart.render();
        },
        graph() {
            if (!this.list) return;
            this.chartContainer.colSpan = "8";
            this.chart.id = "chartContainer";
            this.list.addEventListener("click", (e) => {
                if (e.target.tagName == 'TD') {
                    const activeElem = e.target.parentElement;
                    const searchCoin = activeElem.firstElementChild.innerHTML;
                    const coin = this.searchBy.find(coin => coin.rank == searchCoin);
                    this.creatingChart(this.chart, coin.id);
                    this.chartContainer.append(this.chart);
                    activeElem.classList.toggle("visible");
                    if (activeElem.classList.contains("visible")) {
                        activeElem.insertAdjacentElement("afterend", this.chartContainer);
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
    // }, 1000);
})();
