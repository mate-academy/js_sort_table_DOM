'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

thead.addEventListener('click', sortCell);

function converter(string) {
  return string.replace('$', '').replace(',', '');
}

function sortCell(ev) {
  const elementIndex = ev.target.closest('th').cellIndex;
  const element = ev.target.closest('th');
  const newRows = [...rows];

  if (!element || !thead.contains(element)) {
    return;
  }

  newRows.sort((current, next) => {
    const currentCell = current.cells[elementIndex].innerText;
    const nextCell = next.cells[elementIndex].innerText;
    const convertedCurrent = converter(currentCell);
    const convertedNext = converter(nextCell);

    return elementIndex === 0 || elementIndex === 1
      ? currentCell.localeCompare(nextCell)
      : convertedCurrent - convertedNext;
  });

  rows.forEach(row => tbody.removeChild(row));

  newRows.forEach(newRow => tbody.appendChild(newRow));
}
