'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const columnIndex = e.target.cellIndex;
  const rowsArray = Array.from(tbody.rows);

  rowsArray.sort((a, b) => {
    const contentA = a.cells[columnIndex].textContent.trim();
    const contentB = b.cells[columnIndex].textContent.trim();

    if (columnIndex === 2) {
      return Number(contentA) - Number(contentB);
    }

    if (columnIndex === 3) {
      const salaryA = Number(contentA.replace(/[$,]/g, ''));
      const salaryB = Number(contentB.replace(/[$,]/g, ''));

      return salaryA - salaryB;
    }

    return contentA.localeCompare(contentB);
  });

  tbody.append(...rowsArray);
});
