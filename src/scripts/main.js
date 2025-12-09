'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const th = thead.querySelectorAll('th');
const tr = Array.from(tbody.querySelectorAll('tr'));

th.forEach((head, index) => {
  head.addEventListener('click', () => {
    tr.sort((rowA, rowB) => {
      const cellA = rowA.children[index].textContent.trim();
      const cellB = rowB.children[index].textContent.trim();

      if (index === 2) {
        return Number(cellA) - Number(cellB);
      }

      if (index === 3) {
        const numA = Number(cellA.replace(/,/g, '').replace('$', ''));
        const numB = Number(cellB.replace(/,/g, '').replace('$', ''));

        return numA - numB;
      }

      return cellA.localeCompare(cellB);
    });

    tr.forEach((row) => tbody.append(row));
  });
});
