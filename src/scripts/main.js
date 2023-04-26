'use strict';

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');
const rowsForSort = [...tbody.querySelectorAll('tr')];

table.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const place = e.target.closest('thead') ? 0 : table.rows.length - 1;
    const index = [...table.rows[place].children].indexOf(e.target);

    rowsForSort.sort((a, b) => {
      const first = a.children[index].innerText;
      const second = b.children[index].innerText;

      if (isNaN(parseFloat(first.slice(1)))) {
        return first.localeCompare(second);
      } else {
        if (first.slice(0, 1) === '$') {
          return parseFloat(first.slice(1)) - parseFloat(second.slice(1));
        }

        return parseFloat(first) - parseFloat(second);
      }
    });
  }

  for (let i = 0; i < rowsForSort.length; i++) {
    tbody.append(rowsForSort[i]);
  }
});
