'use strict';

// write code here
const trListHead = document.querySelectorAll("thead > tr > th");
const tbody = document.querySelector("tbody");
const trListTable = Array.from(tbody.querySelectorAll("tr"));

trListHead.forEach((header) => {
  header.addEventListener("click", () => sortTable(header.cellIndex));
});

function sortTable(columnIndex) {
  const sortedRows = [...trListTable].sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    if (columnIndex === 0 || columnIndex === 1) {
      return aText.localeCompare(bText);
    } else if (columnIndex === 2) {
      return Number(aText) - Number(bText);
    } else if (columnIndex === 3) {
      const newA = aText.replace(/[,$()]/g, '');
      const newB = bText.replace(/[,$()]/g, '');

      return Number(newA) - Number(newB);
    }
  });

  tbody.innerHTML = "";
  sortedRows.forEach((row) => tbody.appendChild(row));
};
