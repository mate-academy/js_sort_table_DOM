'use strict';

function convertToNumber(string) {
  let result = string.replace('$', '');

  result = result.replace(',', '');

  return +result;
}

const tableBody = document.querySelector('tbody');
const rows = [...tableBody.rows];

document.querySelectorAll('th').forEach((rowHead, index) => {
  rowHead.addEventListener('click', () => {
    rows.sort((row1, row2) => {
      const value1 = row1.children[index].textContent;
      const value2 = row2.children[index].textContent;

      if (value1.startsWith('$')) {
        return convertToNumber(value1) - convertToNumber(value2);
      }

      return value1.localeCompare(value2);
    });

    tableBody.innerHTML = '';
    rows.forEach((row) => tableBody.append(row));
  });
});
