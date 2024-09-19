'use strict';

const headers = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const rows = Array.from(tbody.querySelectorAll('tr'));

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    sortTableByColumn(index);
  });
});

function sortTableByColumn(columnIndex) {
  const sortedRows = rows.sort((a, b) => {
    const aText = a.children[columnIndex].textContent.trim();
    const bText = b.children[columnIndex].textContent.trim();

    if (columnIndex === 2 || columnIndex === 3) {
      const aValue =
        columnIndex === 3
          ? parseFloat(aText.replace(/[$,]/g, ''))
          : parseInt(aText);
      const bValue =
        columnIndex === 3
          ? parseFloat(bText.replace(/[$,]/g, ''))
          : parseInt(bText);

      return aValue - bValue;
    }

    return aText.localeCompare(bText);
  });

  while (tbody.firstChild) {
    tbody.removeChild(tbody.firstChild);
  }

  tbody.append(...sortedRows);
}
