'use strict';

// write code here
const headers = [...document.querySelectorAll('table thead tr th')];

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const indexHeader = headers.indexOf(header);
    const rows = [...document.querySelectorAll('table tbody tr')];

    let sortedRows;

    if (header.textContent === 'Name' || header.textContent === 'Position') {
      sortedRows = [...rows].sort((a, b) => {
        return a.children[indexHeader].textContent
          .trim()
          .localeCompare(b.children[indexHeader].textContent.trim());
      });
    } else if (header.textContent === 'Age') {
      sortedRows = [...rows].sort((a, b) => {
        const aAge = Number(a.cells[indexHeader].textContent);
        const bAge = Number(b.cells[indexHeader].textContent);

        return aAge - bAge;
      });
    } else if (header.textContent === 'Salary') {
      sortedRows = [...rows].sort((a, b) => {
        const aSalary = Number(
          a.cells[indexHeader].textContent.replace(/[^0-9.-]+/g, ''),
        );
        const bSalary = Number(
          b.cells[indexHeader].textContent.replace(/[^0-9.-]+/g, ''),
        );

        return aSalary - bSalary;
      });
    } else {
      sortedRows = [...rows].sort((a, b) => {
        const aHeader = a.cells[indexHeader].textContent.trim();
        const bHeader = b.cells[indexHeader].textContent.trim();

        return aHeader.localeCompare(bHeader);
      });
    }

    const tbody = document.querySelector('table tbody');

    tbody.replaceChildren(...sortedRows);
  });
});
