'use strict';

const tableThead = document.querySelector('thead');
const tableTbody = document.querySelector('tbody');

const sortTable = (index) => {
  const rows = tableTbody.querySelectorAll('tr');

  const sortedRows = [...rows].sort((a, b) => {
    const columnAText = a.children[index].innerText;
    const columnBText = b.children[index].innerText;
    const numberRegEx = /\d/g;

    if (numberRegEx.test(columnAText)) {
      return (
        +columnAText.replace(/[$,]/g, '') - +columnBText.replace(/[$,]/g, '')
      );
    }

    return columnAText.localeCompare(columnBText);
  });

  sortedRows.forEach((row) => tableTbody.appendChild(row));
};

tableThead.addEventListener('click', (e) => sortTable(e.target.cellIndex));
