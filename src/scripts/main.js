'use strict';

document.querySelector('thead').addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const index = e.target.cellIndex;
    const rows = [...document.querySelectorAll('tbody tr')];
    const salaryColumb = index === 3;

    const sortedRows = rows.sort((a, b) => {
      let aVal = a.children[index].textContent;
      let bVal = b.children[index].textContent;

      if (salaryColumb) {
        aVal = Number(aVal.replace(/[^0-9]/g, ''));
        bVal = Number(bVal.replace(/[^0-9]/g, ''));

        return aVal - bVal;
      } else {
        return aVal.localeCompare(bVal);
      }
    });
    const tbody = document.querySelector('tbody');

    sortedRows.forEach((row) => tbody.appendChild(row));
  }
});
