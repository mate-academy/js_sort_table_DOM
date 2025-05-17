'use strict';

const tbody = document.querySelector('tbody');
const rows = tbody.querySelectorAll('tr');
const titlesAll = document.querySelectorAll('thead th');

titlesAll.forEach((title, index) => {
  title.addEventListener('click', (e) => {
    const sortRows = [...rows].sort((a, b) => {
      const valueA = a.querySelector(`td:nth-child(${index + 1})`).innerText;
      const valueB = b.querySelector(`td:nth-child(${index + 1})`).innerText;

      return valueA.localeCompare(valueB);
    });

    while (tbody.firstChild) {
      tbody.removeChild(tbody.firstChild);
    }

    sortRows.forEach((row) => tbody.appendChild(row));
  });
});
