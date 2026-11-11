'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const headers = thead.querySelectorAll('th');
const rows = tbody.querySelectorAll('tr');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sortedList = Array.from(rows);

    sortedList.sort((a, b) => {
      const valueA = a.cells[index].textContent;
      const valueB = b.cells[index].textContent;

      if (index === 2) {
        return Number(valueA) - Number(valueB);
      }

      if (index === 3) {
        return (
          Number(valueA.replace(/[$,]/g, '')) -
          Number(valueB.replace(/[$,]/g, ''))
        );
      }

      return valueA.localeCompare(valueB);
    });

    sortedList.forEach((row) => {
      tbody.append(row);
    });
  });
});
