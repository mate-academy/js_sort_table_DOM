'use strict';

// write code here
const head = document.querySelector('thead');
const titles = head.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const rows = tableBody.querySelectorAll('tr');

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    const sortedRows = Array.from(rows).sort((a, b) => {
      const aValue = a.querySelectorAll('td')[index].textContent;
      const bValue = b.querySelectorAll('td')[index].textContent;

      if (title.textContent === 'Age') {
        return parseInt(aValue) - parseInt(bValue);
      }

      if (title.textContent === 'Salary') {
        return parseInt(aValue.slice(1)) - parseInt(bValue.slice(1));
      }

      return aValue.localeCompare(bValue);
    });

    sortedRows.forEach((row) => {
      tableBody.appendChild(row);
    });
  });
});
