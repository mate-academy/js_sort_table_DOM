'use strict';

const table = document.querySelector('table');

const thead = table.querySelector('thead');

thead.addEventListener('click', sortTable);

function sortTable(e) {
  const clickedElement = e.target;

  const clickedElementRow = [...clickedElement.parentElement.children];

  const indexOfSortedColumn = clickedElementRow.findIndex(
    (item) => item.textContent === clickedElement.textContent);

  const tbody = table.querySelector('tbody');

  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    let firsElem = a.children[indexOfSortedColumn].textContent;
    let secondElem = b.children[indexOfSortedColumn].textContent;

    if (firsElem[0] === '$') {
      firsElem = +firsElem.replace('$', '').replace(',', '.');
      secondElem = +secondElem.replace('$', '').replace(',', '.');
    }

    if (isFinite(firsElem)) {
      return +firsElem > +secondElem ? 1 : -1;
    }

    return firsElem > secondElem ? 1 : -1;
  });

  const tbodySorted = document.createElement('tbody');

  for (const elem of rows) {
    tbodySorted.append(elem);
  }

  tbody.remove();

  thead.after(tbodySorted);
}
