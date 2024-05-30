'use strict';

const tableHead = document.querySelector('thead');
const tableHeadCollection = tableHead.querySelectorAll('th');
const tableContent = document.querySelector('tbody');

function sortTable(columnIndex) {
  let shouldSwitch = false;
  let switching = true;

  while (switching) {
    let i = 0;
    const rows = tableContent.rows;

    switching = false;

    for (i = 0; i < rows.length - 1; i++) {
      shouldSwitch = false;

      const row1 = rows[i].getElementsByTagName('td')[columnIndex];
      const row2 = rows[i + 1].getElementsByTagName('td')[columnIndex];

      if (columnIndex === 3) {
        if (
          +row1.innerHTML.slice(1).replaceAll(',', '') >
          +row2.innerHTML.slice(1).replaceAll(',', '')
        ) {
          shouldSwitch = true;
          break;
        }
      } else if (row1.innerHTML.toLowerCase() > row2.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

tableHeadCollection.forEach((headItem) => {
  headItem.addEventListener('click', (e) => {
    switch (e.currentTarget.textContent) {
      case 'Name':
        sortTable(0);
        break;
      case 'Position':
        sortTable(1);
        break;
      case 'Age':
        sortTable(2);
        break;
      case 'Salary':
        sortTable(3);
        break;
    }
  });
});
