
var table = document.getElementById("table0");
var row = table.insertRow(-1);
var cell, text;

for (var i = 0; i < 2; i++) {
  cell = row.insertCell(-1);
  text = "Row " + row.rowIndex + " Cell " + i;
  cell.appendChild(document.createTextNode(text));
}
