'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const getCellValue = (row, index) => {
    return row.children[index].innerText || row.children[index].textContent;
  };

  const ascOrder = (index) => (rowA, rowB) => {
    const valueA = getCellValue(rowA, index);
    const valueB = getCellValue(rowB, index);

    const numA = Number(valueA);
    const numB = Number(valueB);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return valueA.localeCompare(valueB);
  };

  document.querySelectorAll('th').forEach((header, index) => {
    header.addEventListener('click', () => {
      const table = header.closest('table');
      const tbody = table.querySelector('tbody');
      const rowsArr = Array.from(tbody.querySelectorAll('tr'));

      rowsArr.sort(ascOrder(index));

      tbody.append(...rowsArr);
    });
  });
});
