'use strict';

const head = document.body.querySelector('thead');
const table = document.body.querySelector('table');
const tbody = [...table.tBodies][0];
const rows = [...tbody.rows];

head.addEventListener('click', e => {
  let arr = [];

  switch (e.target.textContent) {
    case ('Name'):
      arr = rows.sort((a, b) => {
        const wordA = a.cells[0].textContent;
        const wordB = b.cells[0].textContent;

        return wordA.localeCompare(wordB);
      });

      break;

    case ('Position'):
      arr = rows.sort((a, b) => {
        const wordA = a.cells[1].textContent;
        const wordB = b.cells[1].textContent;

        return wordA.localeCompare(wordB);
      });
      break;

    case ('Age'):
      arr = rows.sort((a, b) => {
        return a.cells[2].textContent - b.cells[2].textContent;
      });
      break;

    case ('Salary'):
      arr = rows.sort((a, b) => {
        const salary1 = a.cells[3].textContent
          .split(',')
          .join('')
          .replace('$', '');

        const salary2 = b.cells[3].textContent
          .split(',')
          .join('')
          .replace('$', '');

        return salary1 - salary2;
      });
      break;
  };

  tbody.append(...arr);
});
