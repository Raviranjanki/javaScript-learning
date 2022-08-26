(() => {
  let table = document.getElementById("table");

  for (let i = 0; i < 8; i++) {
    let tr;
    let td;
    tr = document.createElement("tr");
    for (let j = 0; j < 8; j++) {
      td = document.createElement("td");
      tr.appendChild(td);
      if ((j % 2 == 0 && i % 2 != 0) || (j % 2 != 0 && i % 2 == 0)) {
        td.style.backgroundColor = "black";
      }
    }
    table.appendChild(tr);
  }
})();



(() => {
  let unit = 51;
  if (unit > -1 && unit < 51) {
    console.log(unit * 3.5);
  } else if (unit > 50 && unit < 151) {
    console.log(unit * 4);
  } else if (unit > 150 && unit < 251) {
    console.log(unit * 5.2);
  } else if (unit > 250) {
    console.log(unit * 6.5);
  }
})();
