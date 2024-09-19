'use strict';

const table = document.querySelector('table');
const headers = table.querySelectorAll('th');

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    setSortTable(index);
  });
});

const setSortTable = (columnIndex) => {
  const tBody = table.querySelector('tbody');
  const rows = [...tBody.querySelectorAll('tr')];

  const sortedRows = rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();

    if (+aValue) {
      return +aValue - bValue;
    }

    if (columnIndex === 3) {
      const aSalary = parseFloat(aValue.replace(/[$,]/g, ''));
      const bSalary = parseFloat(bValue.replace(/[$,]/g, ''));

      return aSalary - bSalary;
    }

    return aValue.localeCompare(bValue);
  });

  tBody.innerHTML = '';
  tBody.append(...sortedRows);
};
