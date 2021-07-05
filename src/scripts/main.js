'use strict';

const tbody = document.querySelector('tbody');
const tableRows = tbody.rows;
const thead = document.querySelector('thead');

thead.addEventListener('click', event => {
  const columnIndex = event.target.cellIndex;

  const sortedList = [...tableRows].sort((previous, next) => {
    const prevCell = formatedTdata(previous, columnIndex);
    const nextCell = formatedTdata(next, columnIndex);

    return sortTable(prevCell, nextCell);
  });

  tbody.append(...sortedList);
});

function formatedTdata(tdata, i) {
  return tdata.cells[i].textContent.replace(/[$,]/g, '');
};

function sortTable(prev, next) {
  if (isNaN(prev)) {
    return prev.localeCompare(next);
  }

  return prev - next;
}
