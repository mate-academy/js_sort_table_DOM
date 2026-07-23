'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));

    rows.sort((rowA, rowB) => {
      const valueA = rowA.children[index].textContent;
      const valueB = rowB.children[index].textContent;

      if (index === 2) {
        return Number(valueA) - Number(valueB);
      }

      if (index === 3) {
        const salaryA = Number(valueA.replace('$', '').replace(',', ''));
        const salaryB = Number(valueB.replace('$', '').replace(',', ''));

        return salaryA - salaryB;
      }

      return valueA.localeCompare(valueB);
    });

    rows.forEach((row) => tbody.append(row));
  });
});
