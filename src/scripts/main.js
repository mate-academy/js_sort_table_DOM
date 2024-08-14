/* eslint-disable function-paren-newline */
'use strict';

const tableBodie = document.querySelector('table').tBodies[0];
const colectionRow = tableBodie.children;
const arrRow = Array.from(colectionRow);

document.addEventListener('click', function (e) {
  const id = e.target.closest('thead');

  if (!id) {
    return;
  }

  if (e.target.innerText === 'Name') {
    const sorted = arrRow.sort((row1, row2) =>
      row1.cells[0].innerText.localeCompare(row2.cells[0].innerText),
    );

    sorted.forEach((row) => tableBodie.appendChild(row));
  }

  if (e.target.innerText === 'Position') {
    const sorted = arrRow.sort((row1, row2) =>
      row1.cells[1].innerText.localeCompare(row2.cells[1].innerText),
    );

    sorted.forEach((row) => tableBodie.appendChild(row));
  }

  if (e.target.innerText === 'Age') {
    const sorted = arrRow.sort(
      (row1, row2) => +row1.cells[2].innerText - +row2.cells[2].innerText,
    );

    sorted.forEach((row) => tableBodie.appendChild(row));
  }

  if (e.target.innerText === 'Salary') {
    const sorted = arrRow.sort(
      (row1, row2) =>
        +row1.cells[3].innerText.slice(1).split(',').join('') -
        +row2.cells[3].innerText.slice(1).split(',').join(''),
    );

    sorted.forEach((row) => tableBodie.appendChild(row));
  }
});
