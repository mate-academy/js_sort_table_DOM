'use strict';

const tableHeaders = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const rowsForSort = tbody.querySelectorAll('tr');

tableHeaders.forEach((header, index) => {
  const onHeaderClick = (e) => {
    const sortedRows = [...rowsForSort].sort((a, b) => {
      const rowA = a.children[index].innerHTML;
      const rowB = b.children[index].innerHTML;

      if (index === 0 || index === 1) {
        return rowA.localeCompare(rowB);
      } else if (index === 2) {
        return +rowA - +rowB;
      } else {
        const formatedRowA = +rowA.split(',').join('').slice(1);
        const formatedRowB = +rowB.split(',').join('').slice(1);

        return formatedRowA - formatedRowB;
      }
    });

    tbody.innerHTML = '';
    sortedRows.forEach((row) => tbody.append(row));
  };

  header.addEventListener('click', onHeaderClick);
});
