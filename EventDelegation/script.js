(function(){
    const parent = document.querySelector('div')
    parent.addEventListener('click', (e)=>{
        const target = e.target;
        target.style.backgroundColor = 'red'
    }, true)
})()