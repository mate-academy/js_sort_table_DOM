'use strict';

const tHead = document.querySelector('thead');

tHead.querySelectorAll('th').forEach((th) => {
  th.addEventListener('click', (e) => {
    const index = Array.from(tHead.querySelectorAll('th')).indexOf(th);

    const allTrArray = document.querySelectorAll('tbody tr');
    const cellValues = [];

    allTrArray.forEach((tr) => {
      const cell = tr.cells[index];

      cellValues.push({ row: tr, value: cell.textContent });
    });

    const callback = (a, b) => {
      const columnName = th.textContent.trim();

      if (columnName === 'Name' || columnName === 'Position') {
        return a.value.localeCompare(b.value);
      }

      if (columnName === 'Age') {
        return Number(a.value) - Number(b.value);
      }

      if (columnName === 'Salary') {
        return (
          Number(a.value.replace(/[^0-9.]/g, '')) -
          Number(b.value.replace(/[^0-9.]/g, ''))
        );
      }
    };

    const sorted = cellValues.sort(callback);

    sorted.forEach(({ row }) => {
      document.querySelector('tbody').appendChild(row);
    });
  });
});
