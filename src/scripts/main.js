'use strict';

// write code here
function makeSortable(table) {
  const thead = table.querySelector('thead');
  const tbody = table.querySelector('tbody');

  thead.addEventListener('click', (event) => {
    const th = event.target.closest('th');

    if (!th) {
      return;
    }

    const column = th.cellIndex;
    const rows = [...tbody.children];

    const result = rows.sort((rowA, rowB) => {
      let valueA = rowA.cells[column].innerText.replace(/[$,]/g, '');
      let valueB = rowB.cells[column].innerText.replace(/[$,]/g, '');

      if (!isNaN(valueA)) {
        valueA = +valueA;
        valueB = +valueB;
      };

      return valueA > valueB ? 1 : -1;
    });

    tbody.append(...result);
  });
}

makeSortable(
  document.querySelector('table')
);
