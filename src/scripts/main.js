'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const index = e.target.cellIndex;
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((rowA, rowB) => {
      const valueA = rowA.cells[index].textContent.trim();
      const valueB = rowB.cells[index].textContent.trim();

      if (index === 2) {
        return Number(valueA) - Number(valueB);
      }

      if (index === 3) {
        return (
          Number(valueA.replace(/[$,]/g, '')) -
          Number(valueB.replace(/[$,]/g, ''))
        );
      }

      return valueA.localeCompare(valueB);
    });

    tbody.innerHTML = '';

    rowsArray.forEach((row) => tbody.appendChild(row));
  }
});
