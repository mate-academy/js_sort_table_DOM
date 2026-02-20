'use strict';

const tableHeaders = document.querySelectorAll('thead th');
const tableBody = document.querySelector('tbody');

function toNumber(value) {
  return +value.replace(/[$,]/g, '');
}

tableHeaders.forEach((th) => {
  th.addEventListener('click', (e) => {
    const index = e.target.cellIndex;

    const rowsElements = [...tableBody.querySelectorAll('tr')];

    rowsElements.sort((rowA, rowB) => {
      const valueA = rowA.children[index].textContent.trim();
      const valueB = rowB.children[index].textContent.trim();

      const numberA = toNumber(valueA);
      const numberB = toNumber(valueB);

      if (!isNaN(numberA) && !isNaN(numberB)) {
        return numberA - numberB;
      }

      return valueA.localeCompare(valueB);
    });

    tableBody.innerHTML = '';
    rowsElements.forEach((row) => tableBody.appendChild(row));
  });
});
