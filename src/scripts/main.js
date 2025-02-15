'use strict';

const tableHead = document.querySelector('thead');
const tableRows = [...document.querySelectorAll('tbody tr')];
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const cell = e.target.closest('th');
  const cellContent = cell.innerText;

  switch (cellContent) {
    case 'Name':
      tableBody.replaceChildren(...sortTable(tableRows, 0));
      break;
    case 'Position':
      tableBody.replaceChildren(...sortTable(tableRows, 1));
      break;
    case 'Age':
      tableBody.replaceChildren(...sortNumber(tableRows, 2));
      break;
    case 'Salary':
      tableBody.replaceChildren(...sortNumber(tableRows, 3));
      break;
  }
});

function sortTable(table, column) {
  return table.sort((row1, row2) => {
    return row1.cells[column].innerText.localeCompare(
      row2.cells[column].innerText,
    );
  });
}

function sortNumber(table, column) {
  return table.sort((row1, row2) => {
    const num1 = salaryToNum(row1.cells[column].innerText);
    const num2 = salaryToNum(row2.cells[column].innerText);

    return num1 - num2;
  });
}

function salaryToNum(str) {
  let num = '';

  for (const ch of str) {
    if (!isNaN(ch)) {
      num += ch;
    }
  }

  return +num;
}
