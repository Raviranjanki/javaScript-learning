(function () {
  window.addEventListener("keydown", moveTurtle);
  let leftRight = 0;
  let topDown = 0;
  function moveTurtle(event) {
    if (!event.key.includes("Arrow")) {
      return;
    }
    let flip = false;
    let rotate = 0;

    leftRight > window.innerWidth - 200 ? (leftRight -= 5) : 0;
    leftRight <= 0 ? (leftRight += 5) : 0;
    topDown > window.innerHeight - 130 ? (topDown -= 5) : 0;
    topDown <= 0 ? (topDown += 5) : 0;

    switch (event.key) {
      case "ArrowUp":
        rotate = -90;
        topDown = topDown - 5;
        break;
      case "ArrowDown":
        rotate = 90;
        topDown = topDown + 5;
        break;
      case "ArrowRight":
        flip = false;
        leftRight = leftRight + 5;
        break;
      case "ArrowLeft":
        flip = true;
        leftRight = leftRight - 5;
        break;
      default:
        break;
    }

    const turtle = document.querySelector(".turtle");
    const r = document.querySelector(':root')

        r.style.setProperty('--leftRight', `${leftRight}px`)
        r.style.setProperty('--topDown', `${topDown}px`)
        r.style.setProperty('--rotateX', `${flip ? '180deg' : '0'}`)
        r.style.setProperty('--rotate', `${rotate}deg`)
  }
})();
