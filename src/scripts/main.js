'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.rows);

function sortTable(e) {
  if (e.target.tagName === 'TH') {
    const column = e.target.cellIndex;
    const type = e.target.textContent;

    const sortedRows = rows.sort((a, b) => {
      const aText = a.cells[column].textContent;
      const bText = b.cells[column].textContent;

      if (type === 'Age' || type === 'Salary') {
        return (
          parseFloat(aText.replace(/[$,]/g, '')) -
          parseFloat(bText.replace(/[$,]/g, ''))
        );
      } else {
        return aText.localeCompare(bText);
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.appendChild(row));
  }
}

thead.addEventListener('click', sortTable);
