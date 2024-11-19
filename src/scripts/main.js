'use strict';

// write code here
const table = document.querySelector('table');
const headerOfTable = table.querySelector('thead');

if (headerOfTable) {
  headerOfTable.addEventListener('click', (e) => {
    const titles = [...headerOfTable.querySelectorAll('th')];
    const clickedHeader = e.target.closest('th');

    if (!clickedHeader) {
      return;
    }

    const tableData = [...table.querySelectorAll('tbody tr')].map((row) => {
      return [...row.querySelectorAll('td')].map((cell) => {
        return cell.textContent.trim();
      });
    });

    const index = titles.indexOf(e.target);

    if (index === -1) {
      return;
    }

    const indexOfSalaryCell = 3;

    tableData.sort((a, b) => {
      if (index === indexOfSalaryCell) {
        return compareSalary(a[index], b[index]);
      }

      return a[index].localeCompare(b[index]);
    });

    redrawTableBody(tableData);
  });
}

function compareSalary(a, b) {
  return (
    parseFloat(a.replace(/[^\d.-]/g, '')) -
    parseFloat(b.replace(/[^\d.-]/g, ''))
  );
}

function redrawTableBody(tableData) {
  const newTbody = document.createElement('tbody');

  tableData.forEach((rowData) => {
    const tr = document.createElement('tr');

    rowData.forEach((cellData) => {
      const td = document.createElement('td');

      td.textContent = cellData;
      tr.appendChild(td);
    });
    newTbody.appendChild(tr);
  });

  table.replaceChild(newTbody, table.querySelector('tbody'));
}
