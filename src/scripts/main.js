'use strict';

const personArray = document.querySelector('tbody');
const namesColumnArray = document.querySelector('thead');

function getNumberFromString(value) {
  const result = Number(
    value.replace(/,/g, '').replace('$', '')
  );

  return result;
}

function sortList(columnN) {
  const newPersonArray = [...personArray.children].sort((a, b) => {
    const value = a.children[columnN].innerText;
    const nextValue = b.children[columnN].innerText;

    if (!isNaN(getNumberFromString(value))) {
      return getNumberFromString(value) - getNumberFromString(nextValue);
    } else {
      return value.localeCompare(nextValue);
    }
  });

  newPersonArray.forEach(person => personArray.append(person));
}

namesColumnArray.addEventListener('click', (e) => {
  const targetArr = namesColumnArray.querySelectorAll('th');
  let count = 0;

  [...targetArr].forEach(column => {
    if (column === e.target) {
      sortList(count);
    }

    count++;
  });
});
