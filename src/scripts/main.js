'use strict';

const ourTable = document.querySelector('table');
const tableHead = ourTable.querySelector('thead');
const tableBody = ourTable.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const clicktedTh = e.target;

  if (clicktedTh.tagName !== 'TH') {
    return;
  }

  const headTh = [...tableHead.querySelectorAll('th')];
  const positionTh = headTh.indexOf(clicktedTh);
  const bodyTr = [...tableBody.querySelectorAll('tr')];

  const sortedBody = bodyTr.sort((a, b) => {
    const rowA = a.cells[positionTh].textContent;
    const rowB = b.cells[positionTh].textContent;

    if (positionTh === 0 || positionTh === 1) {
      return rowA.localeCompare(rowB);
    } else {
      const cleanA = rowA.replaceAll('$', '').replaceAll(',', '');
      const cleanB = rowB.replaceAll('$', '').replaceAll(',', '');

      return cleanA - cleanB;
    }
  });

  tableBody.append(...sortedBody);
});
