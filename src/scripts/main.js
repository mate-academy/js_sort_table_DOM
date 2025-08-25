'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const headers = table.querySelectorAll('thead th');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const rowsArray = Array.from(tbody.querySelectorAll('tr'));

    rowsArray.sort((a, b) => {
      let cellA = a.children[index].textContent.trim();
      let cellB = b.children[index].textContent.trim();

      // Перевірка на числові значення
      if (index === 2) { // Age
        cellA = Number(cellA);
        cellB = Number(cellB);
      } else if (index === 3) { // Salary
        cellA = Number(cellA.replace(/[$,]/g, ''));
        cellB = Number(cellB.replace(/[$,]/g, ''));
      } else { // Name, Position
        cellA = cellA.toLowerCase();
        cellB = cellB.toLowerCase();
      }

      return cellA > cellB ? 1 : cellA < cellB ? -1 : 0;
    });

    // Очищаємо tbody і додаємо відсортовані рядки
    tbody.innerHTML = '';
    rowsArray.forEach(row => tbody.appendChild(row));
  });
});

