'use strict';

const title = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');

title.forEach((th) => {
  th.addEventListener('click', () => {
    const cellIndex = th.cellIndex;
    const rows = Array.from(tbody.querySelectorAll('tr')).map((row, index) => ({
      row,
      value: row.cells[cellIndex].textContent,
      index
    }));

    rows.sort((a, b) => {
      let valueA = a.value;
      let valueB = b.value;

      if (cellIndex === 2 || cellIndex === 3) {
        valueA = parseFloat(valueA.replace(/[$,]/g, '')) || valueA;
        valueB = parseFloat(valueB.replace(/[$,]/g, '')) || valueB;
      }

      if (!isNaN(valueA) && !isNaN(valueB)) {
        return valueA - valueB;
      }

      const comparison = valueA.localeCompare(valueB);
      return comparison === 0 ? a.index - b.index : comparison;
    });

    tbody.innerHTML = '';
    rows.forEach(({ row }) => tbody.appendChild(row));
  });
});
