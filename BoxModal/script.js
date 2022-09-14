document.addEventListener('DOMContentLoaded', () => {
    const model = document.querySelector('article')
    const btn = document.querySelector('.show')
    const btn_exit = document.querySelector('span')
    const btn_close = document.querySelector('footer button:first-child')

    btn.addEventListener('click', () => model.style.display = 'flex' )

    btn_close.addEventListener('click', close)

    btn_exit.addEventListener('click', close)
    model.addEventListener('click', (e) => e.target == model ? close() : 0)

    function close() {
        model.style.display = 'none'
    }

})