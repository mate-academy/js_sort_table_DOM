'use strict';

const table = document.querySelector('table');

table.tHead.addEventListener('click', (event) => {
  sortList(event.target.cellIndex, event.target.textContent);
});

function sortList(index, text) {
  const sortedRows = [...table.tBodies[0].rows].sort((a, b) => {
    let first = a.cells[index].textContent;
    let second = b.cells[index].textContent;

    if (text === 'Salary') {
      first = first.replace(/[$,]/g, '');
      second = second.replace(/[$,]/g, '');
    }

    return isNaN(+first) ? first.localeCompare(second) : (+first) - (+second);
  });

  table.tBodies[0].append(...sortedRows);
}
