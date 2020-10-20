'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const listOfPeople = [...tbody.children];

thead.addEventListener('click', ({ target }) => {
  const index = target.cellIndex;

  const sortedList = listOfPeople.sort((a, b) => {
    const currElement = a.cells[index].innerText;
    const nextElement = b.cells[index].innerText;

    if (!isNaN(convertToNumber(currElement))) {
      return convertToNumber(currElement) - convertToNumber(nextElement);
    }

    return currElement.localeCompare(nextElement);
  });

  tbody.append(...sortedList);
});

function convertToNumber(str) {
  return str.replace(/[$,]/g, '');
}
