'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (clickEvent) => {
  if (clickEvent.target.tagName !== 'TH') {
    return;
  }

  const th = clickEvent.target;
  const columnIndex = th.cellIndex;

  const tbody = document.querySelector('tbody');
  const tr = tbody.querySelectorAll('tr');
  const row = [...tr];

  const isAscending = th.dataset.order !== 'asc';

  th.dataset.order = isAscending ? 'asc' : 'desc';

  row.sort((rowA, rowB) => {
    const cellA = rowA.cells[columnIndex].textContent.trim();
    const cellB = rowB.cells[columnIndex].textContent.trim();

    const compareResult = cellA.localeCompare(cellB, undefined, {
      numeric: true,
    });

    return isAscending ? compareResult : -compareResult;
  });

  tbody.append(...row);
});
