'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = [...document.querySelectorAll('tbody tr')];

tableHead.addEventListener('click', (e) => {
  if (e.target.cellIndex <= 1) {
    tableRows.sort((a, b) => {
      return a.children[e.target.cellIndex].textContent.localeCompare(
        b.children[e.target.cellIndex].textContent,
      );
    });
  } else {
    tableRows.sort(
      (a, b) =>
        a.children[e.target.cellIndex].textContent.replace(/\D/g, '') -
        b.children[e.target.cellIndex].textContent.replace(/\D/g, ''),
    );
  }

  tableBody.append(...tableRows);
});
