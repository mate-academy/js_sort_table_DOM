'use strict';

const titles = document.querySelectorAll('thead th');
const tbody = document.querySelector('tbody');
const rows = Array.from(document.querySelectorAll('tbody tr'));
const getNumber = (str) => {
  return +str.replace(/[^\d.-]/g, '');
};

titles.forEach((title, index) => {
  const checkColumnWithNumbers = ['Salary', 'Age'].includes(title.textContent);

  title.addEventListener('click', () => {
    const sortedRows = rows.sort((a, b) => {
      const cellA = a.cells[index].textContent.toUpperCase();
      const cellB = b.cells[index].textContent.toUpperCase();

      if (checkColumnWithNumbers) {
        return getNumber(cellA) - getNumber(cellB);
      }

      return cellA.localeCompare(cellB);
    });

    tbody.innerHTML = '';

    sortedRows.forEach((row) => {
      tbody.appendChild(row);
    });
  });
});
