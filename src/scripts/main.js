'use strict';

const trHead = document.querySelector('tr');
const th = [...trHead.querySelectorAll('th')];
const tbody = document.querySelector('tbody');

th.forEach((item, index) => {
  item.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (!isNaN(cellA) && !isNaN(cellB)) {
        return Number(cellA) - Number(cellB);
      }

      const numA = Number(
        cellA.split('').slice(1).join('').split(',').join(''),
      );
      const numB = Number(
        cellB.split('').slice(1).join('').split(',').join(''),
      );

      if (!isNaN(numA) && !isNaN(numB)) {
        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    rows.forEach((row) => tbody.append(row));
  });
});
