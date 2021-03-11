'use strict';

function makeSortable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (eventClick) => {
    const th = eventClick.target.closest('th');

    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const rows = [...tbody.children];

    switch (eventClick.target.textContent) {
      case ('Name'):
      case ('Position'):
        rows.sort((rowA, rowB) => {
          return rowA.cells[column].textContent
            .localeCompare(rowB.cells[column].textContent);
        });
        break;

      case ('Age'):
        rows.sort((rowA, rowB) => {
          return rowA.cells[column].textContent
            - rowB.cells[column].textContent;
        });
        break;

      case ('Salary'):
        rows.sort((rowA, rowB) => {
          return convertSalary(rowA.cells[column].textContent)
            - convertSalary(rowB.cells[column].textContent);
        });
        break;
    }

    for (const row of rows) {
      tbody.appendChild(row);
    }
  });
}

function convertSalary(string) {
  return string.split(',').join('').replace('$', '');
}

makeSortable(
  document.querySelector('table')
);
