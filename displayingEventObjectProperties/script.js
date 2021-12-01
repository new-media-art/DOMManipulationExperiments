
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  var e = e || window.event;
  document.getElementById("eventType").innerHTML = e.type;

  var table = document.createElement("table");
  var thead = table.createTHead();
  var row = thead.insertRow(-1);
  var labelList = ["#", "Property", "Value"];
  var len = labelList.length;

  for (var i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  var tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (var p in e) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex.toString());
    addCell(row, p);
    addCell(row, e[p]);
  }

  document.body.appendChild(table);
}

window.onload = function (event) {
  showEventProperties(event);
};
