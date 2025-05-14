'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const table = document.querySelector('table');
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');
  const headers = thead.querySelectorAll('th');

  const sortDirections = {};

  const sortTable = (columnIndex) => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const header = headers[columnIndex];
    const currentDirection = sortDirections[columnIndex] || 'asc';
    const newDirection = currentDirection === 'asc' ? 'desc' : 'asc';

    rows.sort((rowA, rowB) => {
      const cellA = rowA.querySelectorAll('td')[columnIndex].textContent.trim();
      const cellB = rowB.querySelectorAll('td')[columnIndex].textContent.trim();

      const isNumber = !isNaN(parseFloat(cellA)) && isFinite(cellA);
      const comparisonResult = isNumber
        ? parseFloat(cellA) - parseFloat(cellB)
        : cellA.localeCompare(cellB, undefined, { sensitivity: 'base' });

      return newDirection === 'asc' ? comparisonResult : -comparisonResult;
    });

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));

    sortDirections[columnIndex] = newDirection;
    headers.forEach((h) => h.removeAttribute('data-sort'));
    header.setAttribute('data-sort', newDirection);
  };

  headers.forEach((header, index) => {
    header.addEventListener('click', () => {
      sortTable(index);
    });
  });
});
