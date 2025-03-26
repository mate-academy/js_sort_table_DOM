/* eslint-disable no-shadow */
'use strict';

const head = document.querySelector('thead');
const rowHead = head.querySelector('tr');
const body = document.querySelector('tbody');
const rowsBody = [...body.querySelectorAll('tr')];

function compare(element1, element2, regime) {
  switch (regime) {
    case 'Age':
      return +element1 - +element2;
    case 'Salary':
      const firstFormated = +element1.replaceAll(/[^0-9]+/g, '');
      const secondFormated = +element2.replaceAll(/[^0-9]+/g, '');

      return firstFormated - secondFormated;
    default:
      return element1.localeCompare(element2);
  }
}

function tableSort(event) {
  const target = event.target;

  if (!target.matches('th')) {
    return;
  }

  const index = target.cellIndex;

  rowsBody.sort((row1, row2) => {
    const firstValue = [...row1.children][index].innerText;
    const secondValue = [...row2.children][index].innerText;
    const regime = target.innerText;

    return compare(firstValue, secondValue, regime);
  });

  rowsBody.forEach((row) => body.append(row));
}

rowHead.addEventListener('click', tableSort);
