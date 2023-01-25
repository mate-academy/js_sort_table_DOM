'use strict';

const employees = document.querySelector('table');

sortTable(employees);

function sortTable(table) {
  document.querySelectorAll('th').forEach((th) =>
    th.addEventListener('click', () => {
      const tbody = table.querySelector('tbody');

      Array.from(tbody.querySelectorAll('tr'))
        .sort(
          getCompareFunction(Array.from(th.parentNode.children).indexOf(th))
        )
        .forEach((tr) => tbody.appendChild(tr));
    })
  );
}

function getCompareFunction(headerIndex) {
  return function(a, b) {
    const aCellValue = getRowCellValue(a, headerIndex);
    const bCellValue = getRowCellValue(b, headerIndex);

    if (
      aCellValue !== ''
      && bCellValue !== ''
      && !isNaN(aCellValue)
      && !isNaN(bCellValue)
    ) {
      return aCellValue - bCellValue;
    }

    return aCellValue[0] === '$'
      ? parseInt(aCellValue.slice(1)) - parseInt(bCellValue.slice(1))
      : aCellValue.toString().localeCompare(bCellValue);
  };
}

function getRowCellValue(tr, index) {
  return tr.children[index].textContent;
}
