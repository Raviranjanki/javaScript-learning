(function(){
    const button = document.querySelector('button')
    const note = document.querySelector(".note");
    const MAX_TIME = 500;
    let lastClick = 0;

    button.addEventListener('custom:doubleClick', (e)=>{
        console.log(e.detail);
    })

    button.addEventListener('click', e =>{
        const time = e.timeStamp - lastClick;
        if(time > MAX_TIME){
            lastClick = e.timeStamp;
            return;
        }
        const myEvent = new CustomEvent('custom:doubleClick', {
            bubbles: true,
            cancelable:true,
            detail: {
                time,
            },
        })
        e.target.dispatchEvent(myEvent)
        lastClick = 0;
    })

    note.addEventListener('custom:doubleClick', e =>{
        console.log(e.detail);
    })
})()