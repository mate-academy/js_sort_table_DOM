'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function sortedByCategory(e) {
  const { target } = e;
  const { cellIndex } = target;

  const sortedByType = [...tableBody.rows].sort(
    (currentElement, nextElement) => {
      const currentValue = currentElement.cells[cellIndex].innerHTML;
      const nextValue = nextElement.cells[cellIndex].innerHTML;
      const currentNumbersValue = +currentValue.replace(/[^0-9]/g, '');
      const nextNumbersValue = +nextValue.replace(/[^0-9]/g, '');

      return currentNumbersValue
        ? currentNumbersValue - nextNumbersValue
        : currentValue.localeCompare(nextValue);
    });

  tableBody.append(...sortedByType);
}
tableHead.addEventListener('click', sortedByCategory);
