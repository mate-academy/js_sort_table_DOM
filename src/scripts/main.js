'use strict';

const thead = document.querySelector('thead');
const titles = thead.querySelectorAll('th');

function sortTable(index) {
  const tbody = document.querySelector('tbody');
  const rows = tbody.querySelectorAll('tr');

  const sortedRows = Array.from(rows).sort((row1, row2) => {
    const cell1 = row1.children[index].innerText
      .replaceAll('$', '')
      .replaceAll(',', '');
    const cell2 = row2.children[index].innerText
      .replaceAll('$', '')
      .replaceAll(',', '');

    if (!isNaN(parseFloat(cell1)) && !isNaN(parseFloat(cell2))) {
      return cell1 - cell2;
    } else {
      return cell1.localeCompare(cell2);
    }
  });

  tbody.innerHTML = '';

  sortedRows.forEach((row) => {
    tbody.append(row);
  });
}

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    sortTable(index);
  });
});
