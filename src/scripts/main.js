'use strict';

const titles = document.querySelectorAll('thead th');
const columns = document.querySelector('tbody');

const toNumber = (value) => +value.replace(/[$,]/g, '');

titles.forEach((title) => {
  title.addEventListener('click', (e) => {
    const index = e.target.cellIndex;

    const rowsElements = [...columns.querySelectorAll('tr')];

    rowsElements.sort((a, b) => {
      const valueA = a.children[index].textContent.trim();
      const valueB = b.children[index].textContent.trim();

      const numberA = toNumber(valueA);
      const numberB = toNumber(valueB);

      if (!isNaN(numberA) && !isNaN(numberB)) {
        return numberA - numberB;
      }

      return valueA.localeCompare(valueB);
    });

    columns.innerHTML = '';
    rowsElements.forEach((row) => columns.appendChild(row));
  });
});
