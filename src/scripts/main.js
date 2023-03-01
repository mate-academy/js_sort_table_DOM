'use strict';

const headers = document.body.querySelectorAll('th');
let columnNumber;

const table = document.body.querySelector('table');
const tBody = document.body.querySelector('tbody');
const rows = tBody.querySelectorAll('tr');

headers.forEach(head => head.addEventListener('click', toSort));

function toSort(e) {
  const target = e.target;

  if (!table.contains(target)) {
    return;
  }

  columnNumber = [...headers].indexOf(target);

  const sortedList = [...rows].sort((a, b) => {
    let dataA = a.children[columnNumber].textContent;
    let dataB = b.children[columnNumber].textContent;

    switch (columnNumber) {
      case 2:
        return Number(dataA) - Number(dataB);

      case 3:
        dataA = convertToNumber(dataA);
        dataB = convertToNumber(dataB);

        return dataA - dataB;

      default:
        return dataA.localeCompare(dataB);
    }
  });

  sortedList.forEach((item) => table.append(item));
};

function convertToNumber(string) {
  const convertedNumber = string.slice(1).split(',').join('');

  return Number(convertedNumber);
}
