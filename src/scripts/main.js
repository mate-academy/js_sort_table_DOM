'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const rows = [...document.querySelector('tbody').children];

function sortTable() {
  tableHead.addEventListener('click', (event) => {
    const currentTarget = event.target.closest('th');
    const theadRow = tableHead.children[0];

    switch (currentTarget) {
      case theadRow.children[0]:
        rows.sort((a, b) =>
          a.children[0].innerText.localeCompare(b.children[0].innerText)
        );
        break;

      case theadRow.children[1]:
        rows.sort((a, b) =>
          a.children[1].innerText.localeCompare(b.children[1].innerText)
        );
        break;

      case theadRow.children[2]:
        rows.sort((a, b) =>
          a.children[2].innerText - b.children[2].innerText
        );
        break;

      case theadRow.children[3]:
        rows.sort((a, b) =>
          a.children[3].innerText.replace(/[$,]/g, '')
          - b.children[3].innerText.replace(/[$,]/g, '')
        );
        break;
    }

    for (const cell of rows) {
      tableBody.append(cell);
    }
  });
}

sortTable();
