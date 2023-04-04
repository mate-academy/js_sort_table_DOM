'use strict';

const header = document.querySelector('thead');

const tbody = document.querySelector('tbody');

const list = [...tbody.querySelectorAll('tr')];

header.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  const SortedRows = list.sort((a, b) => {
    const cellA = a.querySelectorAll('td')[index].innerText;
    const cellB = b.querySelectorAll('td')[index].innerText;

    if (index === 3) {
      const numA = parseFloat(cellA.replace(/[^0-9.-]+/g, ''));
      const numB = parseFloat(cellB.replace(/[^0-9.-]+/g, ''));

      return numA - numB;
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  tbody.prepend(...SortedRows);
});
