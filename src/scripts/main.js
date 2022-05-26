'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rowsArray = [...tbody.rows];

function sortTable(n) {
  if (n === 3) {
    rowsArray.sort((a, b) => {
      let x = a;
      let y = b;

      x = x.children[n].textContent;
      y = y.children[n].textContent;

      return +x.split(',').join('').slice(1)
        - (+y.split(',').join('').slice(1));
    });
  } else {
    rowsArray.sort((a, b) => {
      let x = a;
      let y = b;

      x = x.children[n].textContent;
      y = y.children[n].textContent;

      return x.localeCompare(y);
    });
  }

  tbody.append(...rowsArray);
}

thead.addEventListener('click', (browserEvent) => {
  const index = browserEvent.target.cellIndex;

  sortTable(index);
});
