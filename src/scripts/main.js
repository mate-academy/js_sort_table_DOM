'use strict';

const t = document.querySelector('table');

t.addEventListener('click', (ev) => {
  const trgtEl = ev.target;
  const trgrtElmIndx = trgtEl.cellIndex;
  const rowsForSort = t.tBodies[0].rows;

  if (trgtEl.matches('table th') === false) {
    return;
  }

  if (trgtEl.textContent.toUpperCase() === 'AGE' && trgrtElmIndx === 2) {
    const sortedRows = [...rowsForSort]
      .sort(
        (rowA, rowB) =>
          rowA.cells[trgrtElmIndx].textContent
          - rowB.cells[trgrtElmIndx].textContent
      );

    t.tBodies[0].append(...sortedRows);
  }

  if (
    (trgtEl.textContent.toUpperCase() === 'NAME' && trgrtElmIndx === 0)
    || (trgtEl.textContent.toUpperCase() === 'POSITION' && trgrtElmIndx === 1)
  ) {
    const sortedRows = [...rowsForSort].sort((rowA, rowB) =>
      rowA.cells[trgrtElmIndx].textContent
      > rowB.cells[trgrtElmIndx].textContent ? 1 : -1);

    t.tBodies[0].append(...sortedRows);
  }

  function salaryItem(salary) {
    return salary.split('$').join('').split(',').join('.');
  }

  if (ev.target === t.children[0].firstElementChild.children[3]) {
    const salaryToSort = [...t.children[1].children].sort((a, b) => {
      return salaryItem(a.children[3].innerHTML)
      - salaryItem(b.children[3].innerHTML);
    });

    t.children[1].append(...salaryToSort);
  }
});
