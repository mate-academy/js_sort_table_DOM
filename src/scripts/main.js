'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

function sortByLetter(index) {
  const rows = Array.from(tbody.rows).sort((rowA, rowB) => {
    const firstRow = rowA.cells[index].innerHTML;
    const secondRow = rowB.cells[index].innerHTML;

    if (rowA.cells[index].innerHTML.includes('$')) {
      const salaryA = parseFloat(firstRow.replace(/\$/g, ''));
      const salaryB = parseFloat(secondRow.replace(/\$/g, ''));

      return salaryA - salaryB;
    } else {
      return firstRow > secondRow ? 1 : -1;
    }
  });

  tbody.append(...rows);
}

thead.addEventListener('click', e => {
  const thIndex = e.target.cellIndex;

  sortByLetter(thIndex);
});
