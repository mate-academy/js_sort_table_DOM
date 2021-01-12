'use strict';

const head = document.body.querySelector('thead');
const table = document.body.querySelector('table');
const tbody = [...table.tBodies][0];
const rows = [...tbody.rows];

head.addEventListener('click', e => {
  let arr = [];
  const cellIndex = e.target.cellIndex;

  switch (e.target.textContent) {
    case ('Name'):
      arr = rows.sort((a, b) => {
        const wordA = a.cells[cellIndex].textContent;
        const wordB = b.cells[cellIndex].textContent;

        return wordA.localeCompare(wordB);
      });

      break;

    case ('Position'):
      arr = rows.sort((a, b) => {
        const wordA = a.cells[cellIndex].textContent;
        const wordB = b.cells[cellIndex].textContent;

        return wordA.localeCompare(wordB);
      });
      break;

    case ('Age'):
      arr = rows.sort((a, b) => {
        return a.cells[cellIndex].textContent - b.cells[cellIndex].textContent;
      });
      break;

    case ('Salary'):
      arr = rows.sort((a, b) => {
        const salary1 = a.cells[cellIndex].textContent
          .split(',')
          .join('')
          .replace('$', '');

        const salary2 = b.cells[cellIndex].textContent
          .split(',')
          .join('')
          .replace('$', '');

        return salary1 - salary2;
      });
      break;
  };

  tbody.append(...arr);
});
