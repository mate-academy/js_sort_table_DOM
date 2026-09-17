'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((rowA, rowB) => {
      const valueA = rowA.cells[index].textContent;
      const valueB = rowB.cells[index].textContent;

      if (header.textContent.trim() === 'Salary') {
        const salaryA = Number(valueA.replace('$', '').replaceAll(',', ''));

        const salaryB = Number(valueB.replace('$', '').replaceAll(',', ''));

        return salaryA - salaryB;
      }

      if (header.textContent.trim() === 'Age') {
        return Number(valueA) - Number(valueB);
      }

      return valueA.localeCompare(valueB);
    });

    rows.forEach((row) => {
      tbody.append(row);
    });
  });
});
