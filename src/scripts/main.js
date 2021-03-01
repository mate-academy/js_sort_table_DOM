'use strict';

const table = document.querySelectorAll('table tbody tr');
const tbody = document.querySelector('table tbody');
const thead = document.querySelectorAll('table thead th');
const rows = [...table];

const convert = (string) => {
  return Number(string.replace(/[$,]/g, ''));
};

thead.forEach((title, index) => title.addEventListener('click', () => {
  const sorted = rows.sort(
    (currentRow, nextRow) => {
      const currentValue = currentRow.cells[index].innerText;
      const nextValue = nextRow.cells[index].innerText;

      if (Number.isNaN(convert(rows[0].cells[index].innerText))) {
        return currentValue.localeCompare(nextValue);
      }

      return convert(currentValue) - convert(nextValue);
    });

  tbody.append(...sorted);
}));
