(function () {
    function Gallery() {
        this.gallary = document.createElement("div");
        this.container = document.createElement("div");
        this.modal = document.createElement("div");
        this.modal_image = document.createElement("img");
        this.slider_container = document.createElement("div");
        this.prev = document.createElement("span");
        this.next = document.createElement("span");
        this.body = document.querySelector("body");
    }

    const galleryPrototype = {
        images: "",
        render: function (images) {
            let div, img;
            this.images = images;
            
            images.forEach((image, index) => {
                this.gallary.classList.add("gallary");
                div = document.createElement("div");
                img = document.createElement("img");
                img.src = `./images/${image}`;
                div.classList.add(`img-${index + 1}`);
                div.append(img);
                this.gallary.appendChild(div);
            });

            return this.gallary;
        },
        openModal() {
            this.gallary.addEventListener(
                "click",
                (e) => {
                    if (e.target == this.gallary) return;
    
                    this.display(e);
                    this.slider_container.append(this.prev, this.next);
                    this.slider_container.classList.add("slider");
                    this.prev.innerText = `<`;
                    this.next.innerText = ">";
                    this.modal.classList.add("box");
                    this.container.classList.add("modal");
                    this.body.style.overflow = "hidden";
                    this.body.appendChild(this.container);
                    this.container.append(this.modal, this.slider_container);
                });
        },
        display: function (e) {
            this.modal_image.src = `${e.target.getAttribute("src")}`;
            this.modal.append(this.modal_image);
            this.slider(this.modal_image);

            this.container.addEventListener("click", (e) => {
                if (e.target == this.container) {
                    this.remove();
                }
            });
        },
        remove: function () {
            this.container.remove();
            this.body.style.overflow = "";
        },
        slider: function (currentImage) {
            let currentImageIndex = this.images.indexOf(
                currentImage.getAttribute("src").replace("./images/", "")
            );

            let preNext = (e) => {
                if (e.target != this.slider_container) {
                    if ((e.target.innerText == ">" || e.key === "ArrowRight") &&
                        currentImageIndex >= this.images.length - 1) 
                    {
                        currentImageIndex = -1;
                    }
                    if ((e.target.innerText == ">" || e.key === "ArrowRight") &&
                        currentImageIndex < this.images.length - 1) 
                    {
                        currentImageIndex++;
                        currentImage.setAttribute("src", `./images/${this.images[currentImageIndex]}` );
                        return;
                    }
                    if ( (e.target.innerText == "<" || e.key === "ArrowLeft") && currentImageIndex <= 0) 
                    {
                        currentImageIndex = this.images.length;
                    }

                    currentImageIndex--;
                    currentImage.setAttribute("src", `./images/${this.images[currentImageIndex]}`);
                }
            };

            this.slider_container.addEventListener("click", preNext, true);
            window.addEventListener("keyup", (e) => {
                if (e.key == "ArrowRight" || e.key == "ArrowLeft") {
                    preNext(e);
                }
                if (e.key == "Escape") {
                    this.remove();
                }
            });
        },
    };
    Gallery.prototype = galleryPrototype;

    const main = document.querySelector("main");

    const images = [
        "slider-1.jpg",
        "slider-2.jpg",
        "slider-3.jpg",
        "slider-4.jpg",
        "slider-5.jpg",
        "slider-7.jpg",
    ];
    const images2 = [
        "slider-8.jpg",
        "slider-9.jpg",
        "slider-10.jpg",
        "slider-11.jpg",
        "slider-12.jpg",
        "slider-13.jpg",
    ];

    const gallery = new Gallery();
    main.append(gallery.render(images));
    gallery.openModal();

    const gallery2 = new Gallery();
    main.append(gallery2.render(images2));
})();
