'use strict';

// write code here
const thead = document.querySelector('thead');
const th = thead.children[0].children;
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

Array.from(th).forEach((element) => {
  element.addEventListener('click', (e) => {
    if (element.textContent === 'Name') {
      rows.sort((rowA, rowB) => {
        const A = rowA.cells[0].innerText.toLowerCase();
        const B = rowB.cells[0].innerText.toLowerCase();

        return A.localeCompare(B);
      });
    }

    if (element.textContent === 'Position') {
      rows.sort((rowA, rowB) => {
        const A = rowA.cells[1].innerText.toLowerCase();
        const B = rowB.cells[1].innerText.toLowerCase();

        return A.localeCompare(B);
      });
    }

    if (element.textContent === 'Age') {
      rows.sort((rowA, rowB) => {
        const A = parseInt(rowA.cells[2].innerText, 10);
        const B = parseInt(rowB.cells[2].innerText, 10);

        return A - B;
      });
    }

    if (element.textContent === 'Salary') {
      rows.sort((rowA, rowB) => {
        const A = parseInt(rowA.cells[3].innerText.replace('$', ''), 10);
        const B = parseInt(rowB.cells[3].innerText.replace('$', ''), 10);

        return A - B;
      });
    }

    rows.forEach((row) => tbody.appendChild(row));
  });
});
