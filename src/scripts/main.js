'use strict';

const rows = Array.from(document.querySelectorAll('tbody tr'));
const tbody = document.querySelector('tbody');
const header = document.querySelector('thead tr');

function sortedRows(index) {
  rows.sort((a, b) => {
    const textA = a.children[index].textContent;
    const textB = b.children[index].textContent;

    const cleanA = textA.replace(/[$,]/g, '');
    const cleanB = textB.replace(/[$,]/g, '');

    const numA = parseFloat(cleanA);
    const numB = parseFloat(cleanB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return textA.localeCompare(textB);
  });

  return rows;
}

header.children[0].addEventListener('click', () => {
  sortedRows(0).forEach((row) => tbody.appendChild(row));
});

header.children[1].addEventListener('click', () => {
  sortedRows(1).forEach((row) => tbody.appendChild(row));
});

header.children[2].addEventListener('click', () => {
  sortedRows(2).forEach((row) => tbody.appendChild(row));
});

header.children[3].addEventListener('click', () => {
  sortedRows(3).forEach((row) => tbody.appendChild(row));
});
