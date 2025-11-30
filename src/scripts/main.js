'use strict';

const tableElEmployee = document.querySelector('table');

const thead = tableElEmployee.querySelector('thead');
const tbody = tableElEmployee.querySelector('tbody');

const thElem = thead.querySelectorAll('th');

thElem.forEach((th, index) => {
  th.addEventListener('click', () => {
    const allRowsBody = [...tbody.rows];

    allRowsBody.sort((rowA, rowB) => {
      const a = rowA.cells[index].textContent.trim();
      const b = rowB.cells[index].textContent.trim();

      if (normalize(a, index) > normalize(b, index)) {
        return 1;
      }

      if (normalize(a, index) < normalize(b, index)) {
        return -1;
      }

      return 0;
    });

    allRowsBody.forEach((row) => tbody.append(row));
  });
});

function normalize(value, index) {
  if (index === 2) {
    return Number(value);
  }

  if (index === 3) {
    return Number(value.replace(/[$,]/g, ''));
  }

  return value.toLowerCase();
}
