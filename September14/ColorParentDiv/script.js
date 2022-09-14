(function () {
    let btn_list = document.querySelectorAll('button');
    const div = document.querySelector('div');

    btn_list.forEach(item => {
        item.addEventListener('click', color);
    })

    function color(event) {
        let color = ((event.target.innerText).toLowerCase()) || 'red';
        colorExist(color)
    }

    function colorExist(color) {
        if (div.classList.contains(color)) {
            return;
        }
        if (div.classList.contains('red')) {
            div.classList.remove('red')
        }
        if (div.classList.contains('green')) {
            div.classList.remove('green')
        }
        if (div.classList.contains('blue')) {
            div.classList.remove('blue')
        }
        if (div.classList.contains('yellow')) {
            div.classList.remove('yellow')
        }
        div.classList.add(color)
    }
})();