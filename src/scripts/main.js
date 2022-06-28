'use strict';

const table = document.querySelector('table');

table.addEventListener('click', e => {
  const arrayRows = [...table.tBodies[0].rows];
  const th = e.target.closest('th');

  if (!th) {
    return false;
  }

  function sorting(a, b) {
    const firstElement = a.cells[th.cellIndex].textContent;
    const secondtElement = b.cells[th.cellIndex].textContent;

    switch (th.cellIndex) {
      case 0:
      case 1:
        return firstElement.localeCompare(secondtElement);

      case 2:
        return +firstElement - +secondtElement;

      case 3:
        const newfirseElement = firstElement.slice(1);
        const newSecondElement = secondtElement.slice(1);

        return parseFloat(newfirseElement) - parseFloat(newSecondElement);
    }
  }

  arrayRows.sort(sorting);
  table.tBodies[0].append(...arrayRows);
});
