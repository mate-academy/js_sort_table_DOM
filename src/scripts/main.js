'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach(header => {
  header.addEventListener('click', () => {
    const index = header.cellIndex;
    const rows = table.tBodies[0].querySelectorAll('tr');
    const rowsArray = [...rows];

    rowsArray.sort((a, b) => {
      const cellA = a.querySelectorAll('td')[index].textContent;
      const cellB = b.querySelectorAll('td')[index].textContent;

      function num(str) {
        const hasDigits = /\d/.test(str);

        return hasDigits ? +str.replace(/\D/g, '') : str;
      };

      if (num(cellA) < num(cellB)) {
        return -1;
      } else if (num(cellA) > num(cellB)) {
        return 1;
      } else {
        return 0;
      }
    });

    rowsArray.forEach(row => {
      table.tBodies[0].appendChild(row);
    });
  });
});
