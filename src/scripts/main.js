'use strict';

const main = document.querySelector('table');
let count;

main.addEventListener('click', (e) => {
  do {
    count = 0;

    const rows = main.rows;

    if (e.target.tagName === 'TH') {
      for (let i = 2; i < (rows.length - 1); i++) {
        const prev = rows[i - 1].getElementsByTagName('TD')[e.target.cellIndex];
        const prevStr = prev.innerHTML.toLowerCase()
          .split(',').join('').split('$').join('');

        const current = rows[i].getElementsByTagName('TD')[e.target.cellIndex];
        const currentStr = current.innerHTML.toLowerCase()
          .split(',').join('').split('$').join('');

        switch (e.target.innerHTML) {
          case 'Age':
          case 'Salary':
            if (Number(prevStr) > Number(currentStr)) {
              rows[i].parentNode.insertBefore(rows[i], rows[i - 1]);
              count++;
            }
            break;
          default:
            if (prevStr.localeCompare(currentStr) === 1) {
              rows[i].parentNode.insertBefore(rows[i], rows[i - 1]);
              count++;
            }
            break;
        }
      }
    }
  } while (count > 0);
});
