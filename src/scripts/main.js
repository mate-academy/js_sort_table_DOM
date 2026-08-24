'use strict';

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');

table.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (!header || !tableHead.contains(header)) {
    return;
  }

  const colIndex = header.cellIndex;

  const rows = [...tableBody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    const textA = a.cells[colIndex].textContent;
    const textB = b.cells[colIndex].textContent;

    const numA = textA.replace(/\D/g, '');
    const numB = textB.replace(/\D/g, '');

    if (numA !== '' && numB !== '') {
      return Number(numA) - Number(numB);
    }

    return textA.localeCompare(textB);
  });

  rows.forEach((n) => {
    tableBody.append(n);
  });
});
