'use strict';

const table = document.querySelector('table');

const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTable(index);
  });
});

const sortTable = (columnIndex) => {
  const tableBody = table.querySelector('tbody');
  const rows = [...tableBody.querySelectorAll('tr')];

  const sortedRows = rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    if (columnIndex === 3) {
      const aSalary = parseFloat(aText.replace(/[$,]/g, ''));
      const bSalary = parseFloat(bText.replace(/[$,]/g, ''));

      return aSalary - bSalary;
    }

    if (+aText && +bText) {
      return +aText - +bText;
    }

    return aText.localeCompare(bText);
  });

  tableBody.innerHTML = '';
  tableBody.append(...sortedRows);
};
