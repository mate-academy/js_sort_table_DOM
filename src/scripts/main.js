'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');
  const columnIndex = th.cellIndex;
  const tableInfo = [...tbody.rows];

  if (!th) return;

  tableInfo.sort((rowA, rowB) => {
    const contentA = rowA.cells[columnIndex].textContent;
    const contentB = rowB.cells[columnIndex].textContent;

    if (columnIndex === 2) {
      return (+contentA) - (+contentB);
    }

    if (columnIndex === 3) {
      const A = contentA.replaceAll('$', '').replaceAll(',', '');
      const B = contentB.replaceAll('$', '').replaceAll(',', '');
      return (+A) - (+B);
    }

    return contentA.localeCompare(contentB);
});

  tbody.append(...tableInfo);
})

