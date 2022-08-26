chessBoard = () => {
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
}
chessBoard();