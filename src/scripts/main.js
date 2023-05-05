'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const ths = table.querySelectorAll('thead > tr > th');
const trs = tbody.querySelectorAll('tr');

function sortTable(columnIndex, ascending) {
  const rows = [...trs];
  const order = ascending ? 1 : -1;

  rows.sort((a, b) => {
    const aValue = a.children[columnIndex].textContent.trim();
    const bValue = b.children[columnIndex].textContent.trim();

    if (columnIndex === ths.length - 1) {
      const aSalary = parseInt(aValue.replace(/[$,]/g, ''));
      const bSalary = parseInt(bValue.replace(/[$,]/g, ''));

      return aSalary > bSalary ? order : -order;
    }

    if (aValue === bValue) {
      return 0;
    }

    return aValue > bValue ? order : -order;
  });

  rows.forEach(row => tbody.appendChild(row));
}

ths.forEach((th, index) => {
  th.addEventListener('click', () => {
    const isAscending = th.classList.contains('asc');

    ths.forEach(thr => thr.classList.remove('asc', 'desc'));

    if (isAscending) {
      sortTable(index, false);
      th.classList.add('desc');
    } else {
      sortTable(index, true);
      th.classList.add('asc');
    }
  });
});
