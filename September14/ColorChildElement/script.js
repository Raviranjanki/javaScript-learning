(function () {
    const listOfLi = [...document.querySelectorAll('li')]

    listOfLi.forEach((item) => {
        item.addEventListener('click', color)
    })

    function color(e) {
        let nextChild = e.target.children[0];
        let isNextChildUl = nextChild.children[0].children[0]
        if (nextChild == undefined || isNextChildUl == undefined)
            return
        nextChild.children[0].style.color = 'red'
        isNextChildUl.style.color='black'
    }
})()