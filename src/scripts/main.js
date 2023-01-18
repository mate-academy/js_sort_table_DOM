'use strict';

const head = document.querySelector('thead');
const titles = [...head.children[0].children];

function sortTable(n) {
  const table = document.querySelector('tbody');
  let switching = true;
  let rows, i, x, y, shouldSwitch;

  while (switching) {
    switching = false;
    rows = table.rows;

    for (i = 0; i <= rows.length - 2; i++) {
      shouldSwitch = false;
      x = rows[i].getElementsByTagName('td')[n];
      y = rows[i + 1].getElementsByTagName('td')[n];

      if (Number(x.innerHTML)) {
        if (Number(x.innerHTML) > Number(y.innerHTML)) {
          shouldSwitch = true;
          break;
        }
      } else {
        if (x.innerHTML.indexOf('$') !== -1) {
          const currencyX = +x.innerHTML.slice(1).split(',').join('');
          const currencyY = +y.innerHTML.slice(1).split(',').join('');

          if (currencyX > currencyY) {
            shouldSwitch = true;
            break;
          }
        } else {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch = true;
            break;
          }
        }
      }
    }

    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}

for (let i = 0; i < titles.length; i++) {
  titles[i].addEventListener('click', e => {
    sortTable(i);
  });
}
