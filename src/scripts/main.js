'use strict';

const table = document.querySelector('table');
const headers = document.querySelector('thead');

headers.addEventListener('click', (e) => {
  const index = e.target.cellIndex;
  const sorted = [...table.tBodies[0].rows];

  sorted.sort((a, b) => {
    if (index === 3) {
      const salaryA = a.cells[index].innerText.slice(1).replace(',', '');
      const salaryB = b.cells[index].innerText.slice(1).replace(',', '');

      return Number(salaryA) - Number(salaryB);
    } else {
      return a.cells[index].innerText
        .toLowerCase()
        .localeCompare(b.cells[index].innerText.toLowerCase());
    }
  });

  sorted.forEach((x) => table.tBodies[0].append(x));
});
