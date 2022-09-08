document.addEventListener("DOMContentLoaded", () => {
  let main = document.querySelector("main");
  // console.log(main);
  main.addEventListener("click", (event) => {
    let ball = main.firstElementChild;
    let marginleft = event.clientX - 320;
    let margintop = event.clientY - 160;
    // console.log(event.clientX + " " + event.clientY);
    ball.style.marginLeft = `${marginleft}px`;
    ball.style.marginTop = `${margintop}px`;
  });
});
