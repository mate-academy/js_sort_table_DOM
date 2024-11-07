'use strict';

const head = document.querySelectorAll('thead th');
const sortElements = Array.from(document.querySelectorAll('tbody tr'));

head.forEach((elements) => {
  elements.onclick = function (events) {
    const target = events.target;

    switch (target.textContent) {
      case 'Name':
        nameSort();
        break;

      case 'Position':
        position();
        break;

      case 'Age':
        age();
        break;

      case 'Salary':
        salary();
        break;
    }
  };
});

function nameSort() {
  const tbody = document.querySelector('tbody');
  const resultSortName = sortElements.sort((rowA, rowB) => {
    const cellA = rowA.cells[0].outerText;
    const cellB = rowB.cells[0].outerText;

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  resultSortName.forEach((row) => tbody.appendChild(row));
}

function position() {
  const tbody = document.querySelector('tbody');

  const resultSortName = sortElements.sort((rowA, rowB) => {
    const cellA = rowA.cells[1].outerText;
    const cellB = rowB.cells[1].outerText;

    return cellA.localeCompare(cellB);
  });

  tbody.innerHTML = '';
  resultSortName.forEach((row) => tbody.appendChild(row));
}

function age() {
  const tbody = document.querySelector('tbody');

  const resultSortName = sortElements.sort((rowA, rowB) => {
    const cellA = rowA.cells[2].outerText;
    const cellB = rowB.cells[2].outerText;

    return cellA - cellB;
  });

  tbody.innerHTML = '';
  resultSortName.forEach((row) => tbody.appendChild(row));
}

function salary() {
  const tbody = document.querySelector('tbody');

  const resultSortName = sortElements.sort((rowA, rowB) => {
    const cellA = toValidNum(rowA.cells[3].outerText);
    const cellB = toValidNum(rowB.cells[3].outerText);

    return cellA - cellB;
  });

  tbody.innerHTML = '';
  resultSortName.forEach((row) => tbody.appendChild(row));
}

function toValidNum(param) {
  return param.replace('$', '').replace(/,/g, '');
}
