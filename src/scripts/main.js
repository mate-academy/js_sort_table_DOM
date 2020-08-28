'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...document.querySelector('tbody').children];

function sortTable() {
  thead.addEventListener('click', (event) => {
    const target = event.target.closest('th');
    const theadRow = thead.children[0];

    switch (target) {
      case theadRow.children[0]:
        rows.sort((a, b) =>
          a.children[0].innerText.localeCompare(b.children[0].innerText)
        );

        for (const cell of rows) {
          tbody.append(cell);
        }
        break;

      case theadRow.children[1]:
        rows.sort((a, b) =>
          a.children[1].innerText.localeCompare(b.children[1].innerText)
        );

        for (const cell of rows) {
          tbody.append(cell);
        }
        break;

      case theadRow.children[2]:
        rows.sort((a, b) =>
          a.children[2].innerText - b.children[2].innerText
        );

        for (const cell of rows) {
          tbody.append(cell);
        }
        break;

      case theadRow.children[3]:
        rows.sort((a, b) =>
          a.children[3].innerText.replace(/[$,]/g, '')
          - b.children[3].innerText.replace(/[$,]/g, '')
        );

        for (const cell of rows) {
          tbody.append(cell);
        }
    }
  });
}

sortTable();
