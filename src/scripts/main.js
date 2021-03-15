'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function sortByNumber(index) {
  const rows = Array.from(tbody.rows).sort((rowA, rowB) => {
    const firstCell = rowA.cells[index].innerHTML;
    const secondCell = rowB.cells[index].innerHTML;

    const firstNumber = parseFloat(firstCell.replace(/\$/g, ''));
    const secondNumber = parseFloat(secondCell.replace(/\$/g, ''));

    return firstNumber - secondNumber;
  });

  tbody.append(...rows);
}

function sortByLetter(index) {
  const rows = Array.from(tbody.rows).sort((rowA, rowB) => {
    const firstCell = rowA.cells[index].innerHTML;
    const secondCell = rowB.cells[index].innerHTML;

    return firstCell.localeCompare(secondCell);
  });

  tbody.append(...rows);
}

thead.addEventListener('click', clickEvent => {
  const cellName = clickEvent.target.textContent;
  const header = clickEvent.target.cellIndex;

  switch (cellName) {
    case 'Name':
    case 'Position':
      sortByLetter(header);
      break;
    case 'Age':
    case 'Salary':
      sortByNumber(header);
  }
});
