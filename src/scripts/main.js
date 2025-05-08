'use strict';

const titles = [...document.querySelectorAll('th')];
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll(`tr`)];

function cleanCell(value) {
  return value.replace(/[,$]/g, '').trim();
}

titles.forEach((th, i) => {
  th.addEventListener('click', (e) => {
    rows.sort((a, b) => {
      const cellA = a.querySelectorAll('td')[i].textContent;
      const cellB = b.querySelectorAll('td')[i].textContent;

      const isNumA = +cleanCell(cellA);
      const isNumB = +cleanCell(cellB);

      if (isNaN(isNumA) && isNaN(isNumB)) {
        return cellA.localeCompare(cellB);
      }

      return isNumA - isNumB;
    });

    rows.forEach((row) => {
      tbody.append(row);
    });
  });
});
