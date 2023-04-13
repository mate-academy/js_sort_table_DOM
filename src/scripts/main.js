'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

  thead.addEventListener('click', e => {
    const eIndex = e.target.cellIndex;

    const sortRows = rows.sort((row1, row2) => {
      const cell1 = row1.querySelectorAll('td')[eIndex].textContent;
      const cell2 = row2.querySelectorAll('td')[eIndex].textContent;

      switch (e.target.textContent) {
        case 'Name':
        case 'Position':
          return  cell1.localeCompare(cell2);
        case 'Age':
          return cell1 - cell2;
        case 'Salary':
          return Number(cell1.replace(/[^\d.-]/g, '')) - Number(cell2.replace(/[^\d.-]/g, ''))
      }
    });
    
    tableBody.append(...sortRows);
  });



