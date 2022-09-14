(function () {
    let btn_list = document.querySelectorAll('button');
    const div = document.querySelector('div');
    const colors = []

    btn_list.forEach(item => item.addEventListener('click', color))

    function color(event) {
        let color = ((event.target.innerText).toLowerCase()) || 'doNothing';
        colorExist(color)
    }
    
    function colorExist(color) {
        if (div.classList.contains(color)) {
            return;
        }
        colors.includes(color) ? 0 : colors.push(color);
        
        div.classList.remove(...colors)
        div.classList.add(color)
    }
})();