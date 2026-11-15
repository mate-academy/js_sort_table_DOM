'use strict';

// write code here
const table = document.querySelector('table');
const tBody = table.querySelector('tbody');
const dataArray = Array.from(tBody.querySelectorAll('tr'));

function helper(salary) {
  return Number(salary.replaceAll('$', '').replaceAll(',', ''));
}

table.addEventListener('click', (e) => {
  const category = e.target.closest('thead th');

  if (!category) {
    return;
  }

  const cellIndex = category.cellIndex;

  dataArray.sort((a, b) => {
    const pracA = a.cells[cellIndex].textContent;
    const pracB = b.cells[cellIndex].textContent;

    if (cellIndex <= 1) {
      return pracA.localeCompare(pracB);
    }

    if (cellIndex === 2) {
      return Number(pracA) - Number(pracB);
    }

    return helper(pracA) - helper(pracB);
  });

  dataArray.forEach((row) => {
    tBody.append(row);
  });
});
