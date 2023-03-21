'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const toNumber = item => +item.slice(1).replace(',', '');

tableHead.addEventListener('click', e => {
  const index = e.target.cellIndex;

  const sorted = [...tableBody.rows].sort((a, b) => {
    const aText = a.cells[index].innerText;
    const bText = b.cells[index].innerText;

    switch (index) {
      case 0:
      case 1:
        return aText.localeCompare(bText);
      case 2:
        return +aText - +bText;
      case 3:
        return toNumber(aText) - toNumber(bText);
    }
  });

  tableBody.append(...sorted);
});
