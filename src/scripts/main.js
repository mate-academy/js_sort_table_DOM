'use strict';

const dashboard = document.querySelector('table');
const header = dashboard.tHead;
const titles = header.querySelectorAll('th');

for (const title of titles) {
  title.addEventListener('click', () => {
    const column = title.cellIndex;

    const body = dashboard.tBodies[0];
    const bodyRows = body.querySelectorAll('tr');

    const rowsArray = Array.from(bodyRows);

    rowsArray.sort((a, b) => {
      const aValue = a.cells[column].textContent;
      const bValue = b.cells[column].textContent;
      const isNumberColumn = column === 2 || column === 3;

      if (isNumberColumn) {
        const aNum = +aValue.replace(/[^0-9.-]+/g, '');
        const bNum = +bValue.replace(/[^0-9.-]+/g, '');

        return aNum - bNum;
      } else {
        return aValue.localeCompare(bValue);
      }
    });

    for (const row of rowsArray) {
      body.appendChild(row);
    }
  });
}
