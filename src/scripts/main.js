'use strict';

const titles = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    const rows = Array.from(tbody.querySelectorAll('tr'));
    const isNumber = !isNaN(rows[0].cells[index].textContent.trim());

    rows.sort((rowA, rowB) => {
      let a = rowA.cells[index].textContent.trim();
      let b = rowB.cells[index].textContent.trim();

      if (isNumber) {
        a = parseFloat(a.replace(/[^0-9.]/g, ''));
        b = parseFloat(b.replace(/[^0-9.]/g, ''));
      }

      return a > b ? 1 : -1;
    });

    tbody.append(...rows);
  });
});
