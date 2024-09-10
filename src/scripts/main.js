'use strict';

const sortButtons = document.querySelectorAll('thead tr th');
const tbody = document.querySelector('tbody');

sortButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const rows = Array.from(document.querySelectorAll('tbody tr'));

    const sortedRows = rows.sort((rowA, rowB) => {
      const cellA = rowA.children[index].innerHTML;
      const cellB = rowB.children[index].innerHTML;

      if (button.innerHTML === 'Name' || button.innerHTML === 'Position') {
        return cellA.localeCompare(cellB);
      } else if (button.innerHTML === 'Salary') {
        // Видаляємо символи $, коми і перетворюємо рядок на число
        const salaryA = parseFloat(cellA.replace(/[$,]/g, ''));
        const salaryB = parseFloat(cellB.replace(/[$,]/g, ''));

        return salaryA - salaryB;
      } else {
        // Для числових колонок, таких як Age
        return parseFloat(cellA) - parseFloat(cellB);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  });
});
