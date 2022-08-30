'use strict';

const cellValue = function(tr, index) {
  return tr.children[index].innerText || tr.children[index].textContent;
};

const salaryCleaner = function(string) {
  return string.slice(1).split(',').join('');
};

const comparer = function(index) {
  return function(a, b) {
    return (function(actualCell, nextCell) {
      let actualCellCopy = actualCell;
      let nextCellCopy = nextCell;

      if (actualCell.includes('$') || nextCell.includes('$')) {
        actualCellCopy = salaryCleaner(actualCell);
        nextCellCopy = salaryCleaner(nextCell);
      }

      return nextCellCopy - actualCellCopy
      || nextCellCopy.localeCompare(actualCellCopy);
    }(cellValue(b, index), cellValue(a, index)));
  };
};

document
  .querySelectorAll('th')
  .forEach(th => th.addEventListener('click', () => {
    const table = th.closest('table');
    const tbody = table.querySelector('tbody');

    Array.from(tbody.querySelectorAll('tr'))
      .sort(comparer(Array.from(th.parentNode.children)
        .indexOf(th)))
      .forEach(tr => tbody.appendChild(tr));
  }));
