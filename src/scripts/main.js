'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
let index;

function getNumber(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

document.addEventListener('click', e => {
  const item = e.target;

  if (!item.parentElement.parentElement.closest('thead')) {
    return;
  }

  for (let i = 0; i < tableHead.children[0].children.length; i++) {
    if (item.textContent === tableHead.children[0].children[i].textContent) {
      index = i;
    }
  }

  if (index <= 1) {
    const sortedString = [...tableBody.rows].sort((a, b) =>
      a.cells[index].textContent.localeCompare(b.cells[index].textContent));

    for (const line of sortedString) {
      tableBody.append(line);
    }
  }

  if (index > 1) {
    const sorted = [...tableBody.rows].sort((a, b) =>
      getNumber(a.cells[index].textContent)
      - getNumber(b.cells[index].textContent));

    for (const row of sorted) {
      tableBody.append(row);
    }
  }
});
