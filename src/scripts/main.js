'use strict';

const tableHead = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) {
    return;
  }

  const index = Array.from(tableHead.children).indexOf(th);

  sortTable(index);
});

function parseFormattedNumber(num) {
  return Number(num.replace(/[$,]/g, ''));
}

function sortTable(index) {
  const rows = Array.from(tbody.children);

  rows.sort((a, b) => {
    const valA = a.children[index].textContent.trim();
    const valB = b.children[index].textContent.trim();
    const numA = parseFormattedNumber(valA);
    const numB = parseFormattedNumber(valB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return valA.localeCompare(valB);
  });

  rows.forEach((row) => tbody.append(row));
}
