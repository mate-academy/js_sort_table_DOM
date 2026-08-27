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

  row.sort((rowA, rowB) => {
    return rowA.cells[columnIndex].textContent.localeCompare(
      rowB.cells[columnIndex].textContent,
      undefined,
      { numeric: true },
    );
  });

  tbody.append(...row);
});
