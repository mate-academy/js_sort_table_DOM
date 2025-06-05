'use strict';

const table = document.querySelector('table');
const titles = [...table.querySelectorAll('th')];

titles.forEach((title, index) => {
  title.addEventListener('click', () => {
    sortTable(index);
  });
});

function sortTable(columnIndex) {
  const tbody = document.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  const sortedRows = rows.sort((a, b) => {
    const aText = a.cells[columnIndex].textContent.trim();
    const bText = b.cells[columnIndex].textContent.trim();

    if (!isNaN(aText) && !isNaN(bText)) {
      return +aText - +bText;
    } else if (aText.includes('$') && bText.includes('$')) {
      return parseSalary(aText) - parseSalary(bText);
    } else {
      return aText.localeCompare(bText);
    }
  });

  sortedRows.forEach((row) => tbody.appendChild(row));
}

function parseSalary(salary) {
  return +salary.replaceAll(',', '').replaceAll('$', '');
}
