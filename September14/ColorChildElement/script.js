(function () {
    const listOfLi = [...document.querySelectorAll('li')]
    const FIRST_CHILD = 0;

    listOfLi.forEach((item) => item.addEventListener('click', color))

    function color(e) {
        let nextChild = e.target.children[FIRST_CHILD];
        if (nextChild == undefined)
            return
        nextChild.children[FIRST_CHILD].style.color = 'red'

        let isNextChildUl = nextChild.children[FIRST_CHILD].children[FIRST_CHILD]
        isNextChildUl == undefined ? 0 : isNextChildUl.style.color = 'black';
    }
})()