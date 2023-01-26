"use strict";

const employees = document.querySelector("table");

sortTable(employees);

function sortTable(table) {
  document.querySelectorAll("th").forEach((th) =>
    th.addEventListener("click", () => {
      const tbody = table.querySelector("tbody");

      Array.from(tbody.querySelectorAll("tr"))
        .sort(
          getCompareFunction(
            Array.from(th.parentNode.children).indexOf(th),
            th.textContent
          )
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );
}

function getCompareFunction(headerIndex, key) {
  return function (a, b) {
    const aCellValue = getRowCellValue(a, headerIndex);
    const bCellValue = getRowCellValue(b, headerIndex);

    switch (key) {
      case "Name":
      case "Position":
        return aCellValue.toString().localeCompare(bCellValue);

      case "Age":
        return aCellValue - bCellValue;

      case "Salary":
        return parseInt(aCellValue.slice(1)) - parseInt(bCellValue.slice(1));
    }
  };
}

function getRowCellValue(tr, index) {
  return tr.children[index].textContent;
}
