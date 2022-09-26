(function () {
    const gallery = {
        images: ['slider-1', 'slider-2', 'slider-3', 'slider-4', 'slider-5', 'slider-15', 'slider-7',
            'slider-8', 'slider-9', 'slider-10', 'slider-11', 'slider-12', 'slider-13', 'slider-14'],
        exit_button: document.createElement('small'),
        gallary: document.querySelector('.gallary'),
        show: document.createElement('div'),
        show_image: document.createElement('img'),

        render: function () {
            this.exit_button.innerText = 'X'
            this.exit_button.className = 'exit'
            let div, img;

            for (let i = 0; i < this.images.length / 6; i++) {
                const container = document.createElement('div')
                container.classList.add('column')
                for (let j = i, k = 1; j < i + 6; j++, k++) {
                    div = document.createElement('div')
                    img = document.createElement('img')
                    img.src = `./images/${this.images[j]}.jpg`
                    div.classList.add(`img-${k}`)
                    div.append(img)
                    container.append(div)
                }
                this.gallary.appendChild(container)
            }

            this.gallary.addEventListener('click', (e) => {
                this.show_image.src = `${e.target.getAttribute('src')}`
                this.show.className = 'modal'
                this.show.append(this.show_image, this.exit_button);

                document.body.appendChild(this.show)
                document.body.style.overflow = 'hidden';
                this.remove()
            }, true)
        },
        remove: function () {
            this.show.addEventListener('click', (event) => {
                if (event.target != this.show_image) {
                    this.show.remove()
                    this.exit_button.remove()
                    document.body.style.overflow = '';
                }
            })
        }
    }
    gallery.render()
})()