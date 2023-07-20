'use strict';

const mainRow = document.querySelector('tr');
const cells = mainRow.querySelectorAll('th');
const tableBody = document.querySelector('tbody');
const tableRow = tableBody.querySelectorAll('tr');
const rowArray = Array.from(tableRow);

cells.forEach(cell => {
  cell.addEventListener('click', function() {
    if (cell.textContent === 'Name') {
      rowArray.sort((a, b) => {
        const firstElement = a.children[0].textContent;
        const secondElement = b.children[0].textContent;

        return firstElement.localeCompare(secondElement);
      });

      rowArray.forEach(x => tableBody.appendChild(x));
    } else if (cell.textContent === 'Position') {
      rowArray.sort((a, b) => {
        const firstElement = a.children[1].textContent;
        const secondElement = b.children[1].textContent;

        return firstElement.localeCompare(secondElement);
      });

      rowArray.forEach(x => tableBody.appendChild(x));
    } else if (cell.textContent === 'Age') {
      rowArray.sort((a, b) => {
        const firstElement = Number(a.children[2].textContent);
        const secondElement = Number(b.children[2].textContent);

        return firstElement - secondElement;
      });

      rowArray.forEach(x => tableBody.appendChild(x));
    } else if (cell.textContent === 'Salary') {
      rowArray.sort((a, b) => {
        const firstElement = salaryToNumber(a.children[3].textContent);
        const secondElement = salaryToNumber(b.children[3].textContent);

        return firstElement - secondElement;
      });
      rowArray.forEach(x => tableBody.appendChild(x));
    }
  });
});

function salaryToNumber(string) {
  return Number(string.slice(1).replaceAll(',', ''));
}
