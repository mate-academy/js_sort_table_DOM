'use strict';

const table = document.querySelector('table');

const sortByABC = (a, b) => {
  const nameA = a.textContent.toLowerCase();
  const nameB = b.textContent.toLowerCase();

  if (nameA < nameB) {
    return -1;
  }

  if (nameA > nameB) {
    return 1;
  }

  return 0;
};

table.addEventListener('click', e => {
  const item = e.target;
  const column = [];

  if (!item.closest('thead')) {
    return;
  }

  table.querySelectorAll('tbody tr').forEach(tr => {
    column.push(tr.querySelectorAll('td')[item.cellIndex]);
  });

  const result = [...column].sort(sortByABC);
  let count = 0;

  table.querySelectorAll('tbody tr').forEach(tr => {
    const td = tr.children[item.cellIndex];

    td.outerHTML = `<td>${result[count].textContent}</td>`;
    count++;
  });
});
