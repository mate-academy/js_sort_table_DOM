'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');
const arr = Array.from(tableBody.rows);

table.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sort(e.target.cellIndex);
});

function formatSalary(item) {
  return +item.slice(1).split(',').join('');
};

function sort(index) {
  if (typeof arr[0].cells[index].textContent === 'number') {
    arr.sort((a, b) => a.cells[index].textContent - b.cells[index].textContent);
  }

  if (typeof arr[0].cells[index].textContent === 'string') {
    arr.sort((a, b) => {
      return a.cells[index].textContent
        .localeCompare(b.cells[index].textContent);
    });
  }

  if (arr[0].cells[index].textContent.includes('$')) {
    arr.sort((a, b) => {
      return formatSalary(a.cells[index].textContent)
        - formatSalary(b.cells[index].textContent);
    });
  }

  tableBody.append(...arr);
}
