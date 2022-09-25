function lastChild() {
  return document.querySelectorAll("body>ul li:last-child");
}

function matchAttribute() {
  return document.querySelector('a[href $= ".zip"]');
}

function closestTo(finder, toBeFind) {
  return document.querySelector(`.${finder}`).closest(`.${toBeFind}`);
}

function checkedElement() {
  return document.querySelector("#table input[checked]").value;
}

let formbtn = document.querySelector("#form input[type = submit]");
formbtn.setAttribute("onclick", "call()");
function call() {
    console.log(form);
}

let value = lastChild();
console.log(value);
value[0].style.color = "red";
value[1].style.color = "red";
console.log(matchAttribute());
console.log(closestTo("chapter", "book"));
console.log(checkedElement());