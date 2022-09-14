(function () {
    const btn = document.querySelector('button')
    const text = 'mechine is ';
    btn.addEventListener('click', (e) => {
        btn.dataset.mechine == 'off' ? btn.dataset.mechine = 'on' : btn.dataset.mechine = 'off';
        btn.innerText = text + `${btn.dataset.mechine}`
    })
})