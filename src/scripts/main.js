'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const getCellValue = (row, index) => {
    if (row.children[index].innerText !== undefined) {
      return row.children[index].innerText;
    } else {
      return row.children[index].textContent;
    }
  };

  const ascOrder = (index) => (rowA, rowB) => {
    const valueA = getCellValue(rowA, index);
    const valueB = getCellValue(rowB, index);

    let numberA;
    let numberB;

    if (valueA.charCodeAt(0) === 36) {
      const arrA = Array.from(valueA);
      const arrB = Array.from(valueB);

      arrA.shift();
      arrB.shift();

      numberA = arrA.join('');
      numberB = arrB.join('');
    } else {
      numberA = valueA;
      numberB = valueB;
    }

    const numA = parseFloat(numberA);
    const numB = parseFloat(numberB);

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
