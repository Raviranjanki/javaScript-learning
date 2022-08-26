var global = 20;
function display() {
  let a = 10;
  let x = 3;
  return function show() {
    let b = 20;
    return function show1() {
        return a + b;
    }
  }
}
let test = display()

console.dir(test);

let num = 0;
(function() {

    (function() {
        let num = 1;
        console.log(num);
    }())

    console.log(num);
}())
