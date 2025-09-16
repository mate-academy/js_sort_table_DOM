'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const allTh = document.querySelectorAll('thead th');
  const tbody = document.querySelector('tbody');
  const rows = [...tbody.rows];

  allTh.forEach((th, index) => {
    th.addEventListener('click', () => {
      rows.sort((a, b) => {
        if (index < 2) {
          return a.cells[index].textContent.localeCompare(
            b.cells[index].textContent,
          );
        } else {
          return (
            Number(a.cells[index].textContent.replace(/[,$]/g, '')) -
            Number(b.cells[index].textContent.replace(/[,$]/g, ''))
          );
        }
      });

      rows.forEach((row) => tbody.append(row));
    });
  });
});
