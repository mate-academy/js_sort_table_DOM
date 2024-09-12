'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

thead.addEventListener('click', e => {
  const columnIndex = e.target.cellIndex;

  rows.sort((a, b) => {
    const current = a.cells[columnIndex].innerHTML;
    const next = b.cells[columnIndex].innerHTML;

    if (e.target.cellIndex === 0 || e.target.cellIndex === 1) {
      return current.localeCompare(next);
    }

    if (e.target.cellIndex === 2) {
      return Number(current) - Number(next);
    }

    if (e.target.cellIndex === 3) {
      return salaryToNumber(current) - salaryToNumber(next);
    }
  });
  rows.forEach(x => tbody.appendChild(x));
});

function salaryToNumber(string) {
  return Number(string.slice(1).replaceAll(',', ''));
}
