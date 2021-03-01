'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');

thead.addEventListener('click', sortCell);

function converter(string) {
  return string.replace('$', '').replace(',', '');
}

function sortCell(ev) {
  const titleIndex = ev.target.closest('th').cellIndex;
  const title = ev.target.closest('th');
  const newRows = [...rows];

  if (!title || !thead.contains(title)) {
    return;
  }

  if (titleIndex === 0 || titleIndex === 1) {
    newRows.sort((current, next) => {
      const currentCellString = current.cells[titleIndex].innerText;
      const nextCellString = next.cells[titleIndex].innerText;

      return currentCellString.localeCompare(nextCellString);
    });
  }

  newRows.sort((current, next) => {
    const currentCellNum = current.cells[titleIndex].innerText;
    const nextCellNum = next.cells[titleIndex].innerText;
    const convertedCurrentNum = converter(currentCellNum);
    const convertedNextNum = converter(nextCellNum);

    return convertedCurrentNum - convertedNextNum;
  });

  rows.forEach(row => tbody.removeChild(row));

  newRows.forEach(newRow => tbody.appendChild(newRow));
}
