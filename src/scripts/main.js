'use strict';

const tableRows = document.querySelectorAll('tbody tr');
const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function getNumber(str) {
  return +str.replace(/[$,]/g, '');
}

tableHead.addEventListener('click', (e) => {
  const sorted = [...tableRows].sort((a, b) => {
    const valueA = a.children[e.target.cellIndex].innerText;
    const valueB = b.children[e.target.cellIndex].innerText;

    if (!isNaN(getNumber(valueA))) {
      return getNumber(valueA) - getNumber(valueB);
    } else {
      return valueA.localeCompare(valueB);
    }
  });

  tableBody.append(...sorted);
});
