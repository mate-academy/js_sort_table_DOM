'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

const ageNumberCell = 2;
const salaryNumberCell = 3;

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const targetIndex = e.target.closest('th').cellIndex;

  const result = rows.sort((a, b) => {
    const firstCell = getProcessedCellValue(a, targetIndex);
    const secondCell = getProcessedCellValue(b, targetIndex);

    if (targetIndex === ageNumberCell || targetIndex === salaryNumberCell) {
      return firstCell - secondCell;
    }

    return firstCell.localeCompare(secondCell);
  });

  tbody.prepend(...result);
});

function getProcessedCellValue(row, targetIndex) {
  const cell = row.querySelectorAll('td')[targetIndex];

  return cell.innerText.replace(/[$,]/g, '');
}
