'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function sortNumber(number) {
  return parseFloat(number.replace(/\$/g, ''));
}

function sortTable(index) {
  const rows = Array.from(tbody.rows).sort((rowA, rowB) => {
    const firstCell = rowA.cells[index].innerHTML;
    const secondCell = rowB.cells[index].innerHTML;

    if (firstCell.includes('$') || Number(firstCell)) {
      const firstNumber = sortNumber(firstCell);
      const secondNumber = sortNumber(secondCell);

      return firstNumber - secondNumber;
    } else {
      return firstCell.localeCompare(secondCell);
    }
  });

  tbody.append(...rows);
}

thead.addEventListener('click', e => {
  const header = e.target.cellIndex;

  sortTable(header);
});
