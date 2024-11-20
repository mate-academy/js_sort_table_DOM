'use strict';

// write code here

const table = document.querySelector('table');
const rows = document.querySelector('tbody');

table.addEventListener('click', (e) => {
  if (e.target.nodeName !== 'TH' || e.target.closest('thead') === null) {
    return;
  }

  const sortingBy = e.target.textContent.toLowerCase();

  sortingTable(rows, sortingBy);
});

function sortingTable(item, sortBy) {
  const columnIndexMap = {
    name: 0,
    position: 1,
    age: 2,
    salary: 3,
  };
  const columnIndex = columnIndexMap[sortBy];
  const sortedArray = [...item.rows].sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent;
    const cellB = rowB.cells[columnIndex].textContent;

    switch (sortBy) {
      case 'age':
        return cellA - cellB;

      case 'salary':
        return formattedSalary(cellA) - formattedSalary(cellB);

      default:
        return cellA.localeCompare(cellB);
    }
  });

  item.replaceChildren(...sortedArray);
}

function formattedSalary(salary) {
  return Number(salary.replace(/[,$]/g, ''));
}
