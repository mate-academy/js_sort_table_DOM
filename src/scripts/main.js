'use strict';

const table = document.querySelector('table');
const head = table.querySelector('thead');
const body = table.querySelector('tbody');

head.addEventListener('click', e => {
  const index = e.target.cellIndex;
  const tableElements = [...body.children];

  tableElements.sort((a, b) => {
    const valueA = a.cells[index].textContent;
    const valueB = b.cells[index].textContent;
    const type = e.target.textContent;

    switch (type) {
      case 'Name':
      case 'Position':
        return valueA.localeCompare(valueB);

      case 'Age':
        return valueA - valueB;

      case 'Salary':
        const valueAInt = +valueA.slice(1).replaceAll(',', '');
        const valueBInt = +valueB.slice(1).replaceAll(',', '');

        return valueAInt - valueBInt;

      default:
        return `ERORR`;
    }
  });

  table.append(...tableElements);
});
