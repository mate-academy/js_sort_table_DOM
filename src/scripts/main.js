'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;
  const index = Array.from(th.parentNode.children).indexOf(th);

  sortTable(index);
});

function sortTable(index) {
  const tbody = table.querySelector('tbody');

  const rowsArr = Array.from(tbody.querySelectorAll('tr'));

  rowsArr.sort((rowA, rowB) => {
    const cellA = rowA.cells[index].textContent.trim();
    const cellB = rowB.cells[index].textContent.trim();

    if (index === 3) {
      return (
        parseFloat(cellA.replace(/[$,]/g, '')) -
        parseFloat(cellB.replace(/[$,]/g, ''))
      );
    }

    return cellA.localeCompare(cellB);
  });

  rowsArr.forEach((row) => tbody.appendChild(row));
}
