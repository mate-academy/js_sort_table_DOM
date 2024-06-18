'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const thElems = thead.querySelectorAll('th');
const tbody = table.querySelector('tbody');
const rowsBody = Array.from(tbody.querySelectorAll('tr'));

thElems.forEach((thElem) => {
  thElem.addEventListener('click', () => {
    if (thElem.textContent === 'Name') {
      rowsBody.sort((row1, row2) => {
        return row1.cells[0].textContent.localeCompare(
          row2.cells[0].textContent,
        );
      });

      tbody.innerHTML = '';

      rowsBody.forEach((row) => tbody.appendChild(row));
    }

    if (thElem.textContent === 'Position') {
      rowsBody.sort((row1, row2) => {
        return row1.cells[1].textContent.localeCompare(
          row2.cells[1].textContent,
        );
      });

      tbody.innerHTML = '';

      rowsBody.forEach((row) => tbody.appendChild(row));
    }

    if (thElem.textContent === 'Age') {
      rowsBody.sort(
        (row1, row2) =>
          Number(row1.cells[2].textContent) - Number(row2.cells[2].textContent),
      );

      tbody.innerHTML = '';

      rowsBody.forEach((row) => tbody.appendChild(row));
    }

    if (thElem.textContent === 'Salary') {
      rowsBody.sort((row1, row2) => {
        return (
          parseInt(row1.cells[3].textContent.replace(/\$|,/g, '')) -
          parseInt(row2.cells[3].textContent.replace(/\$|,/g, ''))
        );
      });

      tbody.innerHTML = '';
      rowsBody.forEach((row) => tbody.appendChild(row));
    }
  });
});
