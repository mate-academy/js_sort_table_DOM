'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const peopleList = [...tbody.children];

thead.addEventListener('click', event => {
  const index = event.target.cellIndex;

  const sortedList = peopleList.sort((a, b) => {
    const currentItem = a.cells[index].innerText;
    const nextItem = b.cells[index].innerText;

    if (!isNaN(toNumber(currentItem))) {
      return toNumber(currentItem) - toNumber(nextItem);
    }

    return currentItem.localeCompare(nextItem);
  });

  tbody.append(...sortedList);
});

function toNumber(string) {
  return Number(string.replace(/[$,]/g, ''));
}
