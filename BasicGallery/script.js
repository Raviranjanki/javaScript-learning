(function () {
    const gallery = {
        images: ['slider-1.jpg', 'slider-2.jpg', 'slider-3.jpg', 'slider-4.jpg', 'slider-5.jpg', 'slider-15.jpg', 'slider-7.jpg',
            'slider-8.jpg', 'slider-9.jpg', 'slider-10.jpg', 'slider-11.jpg', 'slider-12.jpg', 'slider-13.jpg', 'slider-14.jpg',
            'slider-15.jpg', 'slider-16.jpg', 'slider-17.jpg', 'slider-18.jpg'],
        gallary: document.querySelector('.gallary'),
        container: document.createElement('div'),
        show: document.createElement('div'),
        show_image: document.createElement('img'),
        slider_container: document.createElement('div'),
        prev: document.createElement('span'),
        next: document.createElement('span'),
        body: document.querySelector('body'),

        render: function () {
            let div, img, length;

            for (let i = 0; i < this.images.length / 6; i++) {
                const container = document.createElement('div')
                container.classList.add('column')
                length = i * 6 + 6;
                for (let j = i * 6, k = 1; j < length; j++, k++) {
                    div = document.createElement('div')
                    img = document.createElement('img')
                    img.src = `./images/${this.images[j]}`
                    // console.log(j);
                    div.classList.add(`img-${k}`)
                    div.append(img)
                    container.append(div)
                }
                this.gallary.appendChild(container)
            }
            this.gallary.addEventListener('click', (e) => {
                this.display(e)
            }, true)
        },
        display: function (e) {

            this.slider_container.append(this.prev, this.next);
            this.slider_container.classList.add('slider')
            this.prev.innerText = `<`;
            this.next.innerText = '>'
            this.show_image.src = `${e.target.getAttribute('src')}`;
            this.show.classList.add('box')
            this.container.classList.add('modal')
            this.show.append(this.show_image);
            this.container.append(this.show, this.slider_container)
            this.body.appendChild(this.container)
            this.body.style.overflow = 'hidden';
            this.remove()

            this.slider(this.show_image)
        },
        remove: function () {
            this.container.addEventListener('click', (event) => {
                if (event.target == this.container) {
                    this.container.remove()
                    this.body.style.overflow = '';
                }
            }, true)
        },
        slider: function (currentImage) {
            let currentImageIndex = this.images.indexOf(currentImage.getAttribute('src').replace('./images/', ''))

            this.slider_container.addEventListener('click', (e) => {
                if (e.target != this.slider_container) {
                    if (e.target.innerText == '>' && currentImageIndex >= this.images.length - 1) {
                        currentImageIndex = -1;
                    }
                    if (e.target.innerText == '>' && currentImageIndex < this.images.length - 1) {
                        currentImageIndex++;
                        currentImage.setAttribute('src', `./images/${this.images[currentImageIndex]}`)
                        return;
                    }
                    if (e.target.innerText == '<' && currentImageIndex <= 0) {
                        currentImageIndex = this.images.length;
                    }
                    currentImageIndex--;
                    currentImage.setAttribute('src', `./images/${this.images[currentImageIndex]}`)
                }
            }, true)
        }
    }
    gallery.render()
})()