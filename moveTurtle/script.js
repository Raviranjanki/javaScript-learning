(function () {
    window.addEventListener('keydown', moveTurtle)
    let x = 0;
    let y = 0;
    function moveTurtle(event) {
        if (!event.key.includes('Arrow')) {
            return
        }
        let flip=false;
        let rotate=0;
        const height = window.innerHeight
        const width = window.innerWidth
        if(x > height || y > width)
        switch (event.key) {
            case 'ArrowUp':
                rotate=-90;
                y=y-5;
                break;
            case 'ArrowDown':
                rotate=90;
                y=y+5
                break;
            case 'ArrowRight':
                flip=false;
                x=x+5;
                break;
            case 'ArrowLeft':
                flip=true;
                x=x-5
                break;
            default:
                break;
        }
        const turtle = document.querySelector('.turtle')
        turtle.setAttribute('style', `
            --rotateX: ${flip ? '180deg' : '0'};
            --x: ${x}px;
            --y: ${y}px;
            --rotate: ${rotate}deg;
            `);
    }
})()