(function () {
    const crypto = {
        main: document.querySelector('main'),
        list: document.querySelector("table tbody"),
        readMore: document.querySelector('.read-more'),
        data: 20,
        async fetch(URL) {
            const response = await fetch(URL);
            if (response.ok) {
                const jsonResponse = await response.json();
                return jsonResponse.data;

            } else {
                console.log('There was an error!', response.status);
            }
        },
        async getCoins(URL) {
            try {
                const coins = await this.fetch(URL);
                const coinsl = coins.slice(0, this.data);
                this.list.innerHTML = '';
                coinsl.forEach(coin => {
                    this.render(coin)
                });
            } catch (error) {
                console.log('Url is incorrect!');
            }
        },
        render(coin) {
            let cell = 0, top = -1;
            row = this.list.insertRow(top);
            row.insertCell(cell).textContent = coin.rank;
            row.insertCell(++cell).append(this.createName(coin.name, coin.symbol));
            row.insertCell(++cell).textContent = `${this.numberToCurrency(coin.priceUsd)}`;
            row.insertCell(++cell).textContent = `${this.convertTo(coin.marketCapUsd)}`;
            row.insertCell(++cell).textContent = `${this.numberToCurrency(coin.vwap24Hr)}`
            row.insertCell(++cell).textContent = `${this.convertTo(coin.supply)}`;
            row.insertCell(++cell).textContent = `${this.convertTo(coin.volumeUsd24Hr)}`;
            row.insertCell(++cell).textContent = `${(Number(coin.changePercent24Hr)).toFixed(2)}%`;
        },
        numberToCurrency(number) {
            number = Number(number);
            if (!number || typeof number != 'number') return '';
            return new Intl.NumberFormat('en-US', {
                style: 'currency',
                currency: 'USD'
            }).format(number);
        },
        convertTo(price) {
            price = Number(price);
            if (!price || typeof price != 'number') return '';
            return `$${(Math.abs(Number(price)) >= 1.0e+12

                ? (Math.abs(Number(price)) / 1.0e+12).toFixed(2) + "t"
                : Math.abs(Number(price)) >= 1.0e+9

                ? (Math.abs(Number(price)) / 1.0e+9).toFixed(2) + "b"
                : Math.abs(Number(price)) >= 1.0e+6

                ? (Math.abs(Number(price)) / 1.0e+6).toFixed(2) + "m"
                : Math.abs(Number(price)) >= 1.0e+3

                ? (Math.abs(Number(price)) / 1.0e+3).toFixed(2) + "k"
                : Math.abs(Number(price)))}`
        },
        createName(name, symbol) {
            let image, container, containerText, heading, para;
            image = `https://assets.coincap.io/assets/icons/${symbol.toLowerCase()}@2x.png`
            container = document.createElement('div');
            containerText = document.createElement('div');
            heading = document.createElement('h4');
            para = document.createElement('span');

            container.classList.add('coin-data')
            const img = document.createElement('img');
            img.src = image ?? '';
            img.alt = symbol;
            heading.innerText = name;
            para.innerText = symbol;
            containerText.append(heading, para);
            container.append(img, containerText);
            return container;
        },
        listCoin() {
            this.getCoins('https://api.coincap.io/v2/assets');
            this.readMore.addEventListener('click', () => {
                this.data = this.data + 20;
                this.getCoins('https://api.coincap.io/v2/assets/m');
            })
        },
    }
    crypto.listCoin()
})()

