'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');

const sortTable = (e) => {
  const target = e.target;

  if (target.tagName === 'TH') {
    const columnName = target.textContent;
    let columnIndex = 0;

    if (columnName === 'Name') {
      columnIndex = 0;
    }

    if (columnName === 'Position') {
      columnIndex = 1;
    }

    if (columnName === 'Age') {
      columnIndex = 2;
    }

    if (columnName === 'Salary') {
      columnIndex = 3;
    }

    const rows = [...tbody.querySelectorAll('tr')];

    const sortedRows = rows.sort((a, b) => {
      const aText = a.cells[columnIndex].textContent;
      const bText = b.cells[columnIndex].textContent;

      if (columnName === 'Salary') {
        const aNum = Number(aText.replace(/[$,]/g, ''));
        const bNum = Number(bText.replace(/[$,]/g, ''));

        return aNum - bNum;
      }

      if (columnName === 'Age') {
        return Number(aText) - Number(bText);
      }

      return aText.localeCompare(bText);
    });

    tbody.append(...sortedRows);
  }
};

table.addEventListener('click', sortTable);
