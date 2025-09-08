'use strict';

const table = document.querySelector('table');
const title = table.querySelectorAll('th');

title.forEach((th, index) => {
  th.addEventListener('click', (e) => {
    const rows = [...table.querySelectorAll('tbody tr')];
    const tbody = document.querySelector('tbody');

    rows.sort((first, second) => {
      const firstCell = first.querySelectorAll('td')[index].textContent;
      const secondCell = second.querySelectorAll('td')[index].textContent;
      const cleanFirst = firstCell.replace(/[$,]/g, '');
      const cleanSecond = secondCell.replace(/[$,]/g, '');

      if (isNaN(Number(cleanFirst)) && isNaN(Number(cleanSecond))) {
        return firstCell.localeCompare(secondCell);
      } else {
        return Number(cleanFirst) - Number(cleanSecond);
      }
    });

    tbody.innerHTML = '';

    rows.forEach((item) => tbody.appendChild(item));
  });
});
