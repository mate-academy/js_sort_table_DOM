'use strict';

const theadRef = document.querySelector('thead');
const tbodyRef = document.querySelector('tbody');
const tableRows = [...tbodyRef.querySelectorAll('tr')];

theadRef.addEventListener('click', (e) => {
  const headerIndex = e.target.cellIndex;

  tableRows.sort((a, b) => {
    const valueType = e.target.textContent;
    const aText = a.cells[headerIndex].textContent;
    const bText = b.cells[headerIndex].textContent;

    switch (valueType) {
      case 'Name':
      case 'Position':
        return aText.localeCompare(bText);

      case 'Age':
        return aText - bText;

      case 'Salary':
        const normalizeSalary = (item) => item.slice(1).split(',').join('');

        return normalizeSalary(aText) - normalizeSalary(bText);
      default:
    }
  });

  tableRows.forEach(item => tbodyRef.append(item));
});
