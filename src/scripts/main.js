'use strict';

const headerRow = document.querySelector('table > thead > tr');

const tbody = document.querySelector('tbody');
const rows = [...document.querySelectorAll('tbody > tr')];
const salaryToNumber = salary => +salary.slice(1).split(',').join('');

headerRow.addEventListener('click', e => {
  const cellIndex = e.target.cellIndex;

  rows.sort((a, b) => {
    const contentA = a.cells[cellIndex].innerText;
    const contentB = b.cells[cellIndex].innerText;

    if (contentA.toUpperCase() !== contentA.toLocaleLowerCase()) {
      return contentA.localeCompare(contentB);
    }

    return contentA[0] !== '$' || contentB[0] !== '$'
      ? contentA - contentB
      : salaryToNumber(contentA) - salaryToNumber(contentB);
  });

  tbody.append(...rows);
});
