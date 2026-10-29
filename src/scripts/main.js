'use strict';

const titles = [...document.querySelectorAll('table > thead > tr > th')];
const tbody = document.querySelector('tbody');

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    const rows = [...tbody.rows];

    rows.sort((a, b) => {
      const stringA = a.cells[index].textContent;
      const stringB = b.cells[index].textContent;
      const numberA = Number(stringA.replace('$', '').replaceAll(',', ''));
      const numberB = Number(stringB.replace('$', '').replaceAll(',', ''));

      if (!stringA && !stringB) {
        return 0;
      }

      if (!stringA) {
        return 1;
      }

      if (!stringB) {
        return -1;
      }

      if (Number.isFinite(numberA) && Number.isFinite(numberB)) {
        return numberA - numberB;
      } else {
        return stringA.localeCompare(stringB);
      }
    });

    tbody.append(...rows);
  });
});
