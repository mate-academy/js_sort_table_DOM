'use strict';

const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;
  const tbody = document.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const valueA = rowA.cells[index].textContent.trim();
    const valueB = rowB.cells[index].textContent.trim();
    const cleanA = valueA.replace('$', '').replaceAll(',', '');
    const cleanB = valueB.replace('$', '').replaceAll(',', '');

    if (!isNaN(cleanA)) {
      return Number(cleanA) - Number(cleanB);
    }

    return cleanA.localeCompare(cleanB);
  });

  tbody.append(...rows);
});
