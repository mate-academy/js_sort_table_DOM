'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const trs = tbody.querySelectorAll('tr');
const headerRow = thead.querySelector('tr');
const dataRows = Array.from(trs);

headerRow.addEventListener('click', (e) => {
  const index = Array.from(headerRow.children).indexOf(e.target);

  dataRows.sort((a, b) => {
    const cellA = a.children[index].textContent;
    const cellB = b.children[index].textContent;

    if (index === 2) {
      const numA = parseFloat(cellA);
      const numB = parseFloat(cellB);

      return numA - numB;
    } else if (index === 3) {
      const dateA = cellA
        .split('')
        .filter((char) => char !== '$' && char !== ',')
        .join('');
      const dateB = cellB
        .split('')
        .filter((char) => char !== '$' && char !== ',')
        .join('');

      return parseFloat(dateA) - parseFloat(dateB);
    } else {
      return cellA.localeCompare(cellB);
    }
  });

  dataRows.forEach((row) => {
    tbody.appendChild(row);
  });
});
