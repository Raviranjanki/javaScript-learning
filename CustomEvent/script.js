(function () {
    function highlight(element) {
        const bgColor = "yellow";
        element.style.backgroundColor = bgColor;

        let event = new CustomEvent("highlight", {
            detail: {
                backgroundColor: bgColor,
                color: 'red'
            },
        });

        element.dispatchEvent(event);
    }

    const note = document.querySelector(".note");

    function addBorder(element) {
        element.style.border = "solid 2px red";
    }

    note.addEventListener("highlight", function(e) {
        addBorder(this);

        console.log(e.detail);
    });

    highlight(note);

})();
