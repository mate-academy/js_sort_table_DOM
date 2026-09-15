'use strict';

// Helper function to extract and parse numeric or string cell values
const parseCellValue = (value) => {
  const trimmed = value.trim();
  // Strip dollar signs and commas to check if the value is numeric
  const cleaned = trimmed.replace(/[$,]/g, '');

  if (cleaned !== '' && !Number.isNaN(Number(cleaned))) {
    return Number(cleaned);
  }

  return trimmed; // Return as string if not numeric
};

// Target the table elements
const table = document.querySelector('table');

const tableHeader = table ? table.querySelector('thead') : null;
const tableBody = table ? table.querySelector('tbody') : null;

if (tableHeader && tableBody) {
  tableHeader.addEventListener('click', (e) => {
    const th = e.target.closest('th');

    if (!th) {
      return;
    }

    const columnIndex = th.cellIndex;
    const rows = Array.from(tableBody.querySelectorAll('tr'));

    // Sort rows in ascending order based on the clicked column
    rows.sort((rowA, rowB) => {
      const cellA = rowA.children[columnIndex].textContent;
      const cellB = rowB.children[columnIndex].textContent;

      const valueA = parseCellValue(cellA);
      const valueB = parseCellValue(cellB);

      if (typeof valueA === 'number' && typeof valueB === 'number') {
        return valueA - valueB; // Numeric comparison
      }

      return String(valueA).localeCompare(String(valueB)); // String comparison
    });

    // Re-append sorted rows into the tbody
    rows.forEach((row) => tableBody.appendChild(row));
  });
}
