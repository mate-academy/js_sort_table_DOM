'use strict';

function parseCurrencyValue(currencyValue) {
  return parseFloat(currencyValue.replace(/[^0-9.-]+/g, ''));
}

function getSortSettings(sortBy) {
  switch (sortBy) {
    case 'name':
      return [0, (a, b) => a.localeCompare(b)];
    case 'position':
      return [1, (a, b) => a.localeCompare(b)];
    case 'age':
      return [2, (a, b) => Number(a) - Number(b)];
    case 'salary':
      return [3, (a, b) => parseCurrencyValue(a) - parseCurrencyValue(b)];
    default:
      return -1;
  }
}

const {
  tHead,
  tBodies,
} = document.querySelector('table');

tHead.addEventListener('click', (eventClick) => {
  if (!eventClick.target.matches('th')) {
    return;
  }

  const sortBy = eventClick.target.textContent.trim().toLowerCase();

  const initialColumn = Array.from(document.querySelectorAll('tbody tr'));

  initialColumn.sort((tRowA, tRowB) => {
    const [sortByIndex, sortCallback] = getSortSettings(sortBy);

    if (sortByIndex < 0) {
      return 0;
    }

    const sortContentA = tRowA.cells[sortByIndex].textContent;
    const sortContentB = tRowB.cells[sortByIndex].textContent;

    return sortCallback(sortContentA, sortContentB);
  });

  tBodies[0].append(...initialColumn);
});
