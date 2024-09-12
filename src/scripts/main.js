'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

const convert = (string) => {
  return Number(string.replace(/[$,]/g, ''));
};

const sortColumn = (e) => {
  const index = e.target.cellIndex;
  let sorted;

  if (Number.isNaN(convert(rows[0].cells[index].innerText))) {
    sorted = rows.sort(
      (currentRow, nextRow) => {
        const currentValue = currentRow.cells[index].innerText;
        const nextValue = nextRow.cells[index].innerText;

        return currentValue.localeCompare(nextValue);
      });
  } else {
    sorted = rows.sort((currentRow, nextRow) => {
      const currentValue = currentRow.cells[index].innerText;
      const nextValue = nextRow.cells[index].innerText;

      return convert(currentValue) - convert(nextValue);
    });
  }

  tbody.append(...sorted);
};

thead.addEventListener('click', sortColumn);
