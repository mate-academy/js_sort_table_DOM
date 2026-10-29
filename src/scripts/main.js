'use strict';

// write code here
const tableHead = document.querySelector('thead');
const headRow = tableHead.querySelector('tr');

headRow.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName === 'TH') {
    const columnIndex = clickEvent.target.cellIndex;

    const selectedRowElements = Array.from(
      document.querySelectorAll('tbody tr'),
    );

    const rowsSorted = selectedRowElements.sort((a, b) => {
      const A = a.cells[columnIndex].textContent;
      const B = b.cells[columnIndex].textContent;

      if (columnIndex === 2 || columnIndex === 3) {
        const aValue = Number(A.replace(/\D/g, ''));
        const bValue = Number(B.replace(/\D/g, ''));

        return aValue - bValue;
      } else {
        return A.localeCompare(B);
      }
    });

    for (const row of rowsSorted) {
      document.querySelector('tbody').append(row);
    }
  }
});
