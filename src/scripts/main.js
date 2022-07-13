'use strict';

const main = document.querySelector('table');
let count;
let x;
let y;

main.addEventListener('click', (e) => {
  do {
    count = 0;

    const rows = main.rows;

    if (e.target.tagName === 'TH') {
      for (let i = 2; i < (rows.length - 1); i++) {
        x = rows[i - 1].getElementsByTagName('TD')[e.target.cellIndex]
          .innerHTML.toLowerCase().split(',').join('').split('$').join('');

        y = rows[i].getElementsByTagName('TD')[e.target.cellIndex]
          .innerHTML.toLowerCase().split(',').join('').split('$').join('');

        switch (e.target.innerHTML) {
          case 'Age':
          case 'Salary':
            if (Number(x) > Number(y)) {
              rows[i].parentNode.insertBefore(rows[i], rows[i - 1]);
              count++;
            }
            break;
          default:
            if (x.localeCompare(y) === 1) {
              rows[i].parentNode.insertBefore(rows[i], rows[i - 1]);
              count++;
            }
            break;
        }
      }
    }
  } while (count > 0);
});
