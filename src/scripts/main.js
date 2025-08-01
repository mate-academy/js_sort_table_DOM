'use strict';

const th = document.querySelectorAll('th');

th.forEach((header) => {
  header.addEventListener('click', function (e) {
    const index = Array.from(th).indexOf(e.target);
    const table = e.target.closest('table');
    // Exclude header row
    const rows = Array.from(table.querySelectorAll('tr')).slice(1);

    rows.sort((a, b) => {
      const cellA = a.children[index].textContent.trim();
      const cellB = b.children[index].textContent.trim();

      return cellA.localeCompare(cellB, undefined, { numeric: true });
    });

    // Clear existing rows and append sorted rows
    const tbody = table.querySelector('tbody');

    tbody.innerHTML = '';
    rows.forEach((row) => tbody.appendChild(row));
  });
});
