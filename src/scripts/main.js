'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const targetIndex = e.target.closest('th').cellIndex;

  const result = rows.sort((a, b) => {
    const firstCell = a
      .querySelectorAll('td')[targetIndex]
      .innerText.replace(/[$,]/g, '');
    const secondCell = b
      .querySelectorAll('td')[targetIndex]
      .innerText.replace(/[$,]/g, '');

    if (targetIndex === 2 || targetIndex === 3) {
      return firstCell - secondCell;
    }

    return firstCell.localeCompare(secondCell);
  });

  tbody.prepend(...result);
});
