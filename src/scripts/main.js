'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

function removeSymbols(text) {
  return text.replace(/\W/g, '');
}

// eslint-disable-next-line
tableHead.addEventListener('click', (event) => {
  const index = event.target.cellIndex;

  const sortedList = [...tableBody.rows].sort((elementA, elementB) => {
    const textA = removeSymbols(elementA.cells[index].innerText);
    const textB = removeSymbols(elementB.cells[index].innerText);

    if (isNaN(textA)) {
      return textA.localeCompare(textB);
    }

    return textA - textB;
  });

  tableBody.append(...sortedList);
});
