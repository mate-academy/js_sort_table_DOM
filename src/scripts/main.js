'use strict';

const tableToClick = document.querySelector('table');

// !! POSSIBLY DONE
function sortList(list, index) {
  return list.sort((a, b) => {
    // extract contents
    let valA = a.cells[index].textContent.trim();
    let valB = b.cells[index].textContent.trim();

    // If it's names columns
    if (index !== 3 && index !== 2) {
      valA = valA.toLowerCase();
      valB = valB.toLowerCase();

      return valA.localeCompare(valB);
    }
    valA = parseInt(valA.replace(/[^0-9.]/g, ''));
    valB = parseInt(valB.replace(/[^0-9.]/g, ''));

    return valA - valB;
  });
}

// ! DONE
function updateTable(sortedRows) {
  const tableBody = tableToClick.querySelector('tbody');

  tableBody.innerHTML = '';

  sortedRows.forEach((row) => {
    tableBody.appendChild(row);
  });
}

// ! DONE
document.addEventListener('click', (e) => {
  const columnIndex = e.target.cellIndex;
  const tableHeaders = e.target.closest('table');

  if (!tableHeaders) {
    return;
  }

  const tableRows = Array.from(document.querySelectorAll('table > tbody > tr'));
  const sortedRows = sortList(tableRows, columnIndex);

  updateTable(sortedRows);
});
