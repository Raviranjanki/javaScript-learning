document.addEventListener('DOMContentLoaded', () => {
    let images, prev, next, currentImage, dots;
     images = ['slider-1', 'slider-2', 'slider-3', 'slider-4', 'slider-5']
     prev = document.querySelector('.prev')
     next = document.querySelector('.next')
     currentImage = document.querySelector('div img')
     dots = [...document.querySelectorAll('small')]

    let [START_INDEX, END_INDEX] = [0, images.length - 1]
    let currentIndex = 2;
    dots[currentIndex].style.color = "white"

    next.addEventListener('click', () => {
        if (currentIndex != END_INDEX) {
            currentImage.src = `./images/${images[++currentIndex]}.jpg`
            dots[currentIndex].style.color = "white"
            dots[currentIndex - 1].style.color = 'rgba(255, 255, 255, 0.241)'
        }
    })
    
    prev.addEventListener('click', () => {
        if (currentIndex > START_INDEX) {
            currentImage.src = `./images/${images[--currentIndex]}.jpg`
            dots[currentIndex].style.color = "white"
            dots[currentIndex + 1].style.color = 'rgba(255, 255, 255, 0.241)'
        }
    })
})