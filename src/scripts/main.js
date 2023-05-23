'use strict';

const tBody = document.querySelector('tbody');
const tHead = document.querySelector('thead');

function findNumbers(string) {
  return Number(string.replace(/[$,]/g, ''));
};

tHead.addEventListener('click', e => {
  const columnIndex = e.target.cellIndex;
  const sorted = [...tBody.children].sort((a, b) => {
    const firstElement = a.querySelectorAll('td')[columnIndex].innerText;
    const secondElement = b.querySelectorAll('td')[columnIndex].innerText;

    if (columnIndex === 3) {
      return findNumbers(firstElement) - findNumbers(secondElement);
    } else {
      return firstElement.localeCompare(secondElement);
    }
  });

  sorted.forEach(item => tBody.append(item));
});
