'use strict';

const tbody = document.querySelector('tbody');
const header = document.querySelector('thead');

header.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (th) {
    const sortBy = th.cellIndex;

    const sortData = (row1, row2) => {
      const row1Content = row1.cells[sortBy].textContent;
      const row2Content = row2.cells[sortBy].textContent;

      return row1Content.localeCompare(row2Content, undefined, {
        numeric: true,
      });
    };

    const body = Array.from(tbody.querySelectorAll('tr'));

    body.sort(sortData);

    body.forEach((tr) => {
      tbody.append(tr);
    });
  }
});
