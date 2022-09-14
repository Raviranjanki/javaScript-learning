(function () {
    const listOfLi = [...document.querySelectorAll('li')]

    listOfLi.forEach((item) => {
        item.addEventListener('click', color)
    })

    function color(e) {
        let nextChild = e.target.children[0];
        if (nextChild == undefined)
            return
        nextChild.children[0].style.color = 'red'
    }
})()