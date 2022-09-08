document.addEventListener("DOMContentLoaded", () => {
  let ul = document.querySelector("ul");

  function colorSecondChild(ul) {
    let li = ul.children;

    for (let i = 0; i < li.length; i++) {
      li[1].style.backgroundColor = "red";

      for (let j = 0; j < li[i].children.length; j++) {
        if (li[i].children[j].tagName == "UL") {
          colorSecondChild(li[i].children[j]);
        }
      }
    }
    return;
  }
  colorSecondChild(ul);
});
