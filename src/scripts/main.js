'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

const sortColumn = (columnIndex, isNumeric) => {
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    let aVal = a.cells[columnIndex].textContent.trim();
    let bVal = b.cells[columnIndex].textContent.trim();

    if (isNumeric) {
      aVal = Number(aVal.replace(/\$|,/g, ''));
      bVal = Number(bVal.replace(/\$|,/g, ''));
    }

    return aVal > bVal ? 1 : aVal < bVal ? -1 : 0;
  });

  rows.forEach(row => tbody.appendChild(row));
};


thead.addEventListener('click', (event) => {
  const th = event.target.closest('th');
  if (!th) return;

  const header = th.textContent.trim();

  switch (header) {
    case "Name":
      sortColumn(0, false);
      break;
    case "Position":
      sortColumn(1, false);
      break;
    case "Age":
      sortColumn(2, true);
      break;
    case "Salary":
      sortColumn(3, true);
      break;
  }
});
