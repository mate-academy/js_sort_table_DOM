'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRows = tableBody.querySelectorAll('tr');

tableHead.addEventListener('click', (occurrent) => {
  const indexOfColumn = occurrent.target.cellIndex;

  if (!tableHead.children) {
    return;
  }

  switch (indexOfColumn) {
    case 0:
    case 1:
      sortColumnWithtWords(indexOfColumn);
      break;
    case 2:
    case 3: sortColumnWithNumbers(indexOfColumn);
      break;
  }
});

function sortColumnWithtWords(indexOfColumn) {
  const arrayWithSortedItems = [ ...tableRows ].sort((a, b) => {
    const arg1 = a.children[indexOfColumn].innerHTML;
    const arg2 = b.children[indexOfColumn].innerHTML;

    return arg1.localeCompare(arg2);
  });

  for (const item of arrayWithSortedItems) {
    tableBody.append(item);
  }
}

function sortColumnWithNumbers(indexOfColumn) {
  const arrayWithSortedItems = [ ...tableRows ].sort((a, b) => {
    const arg1 = a.children[indexOfColumn].innerHTML;
    const arg2 = b.children[indexOfColumn].innerHTML;

    if (indexOfColumn === 3) {
      return convertIntoNumber(arg1) - convertIntoNumber(arg2);
    }

    return +arg1 - (+arg2);
  });

  for (const item of arrayWithSortedItems) {
    tableBody.append(item);
  }
}

function convertIntoNumber(arrayWithStrings) {
  const removeSign = arrayWithStrings.replace(',', '');
  const arrayWithNumrers = Number(removeSign.slice(1));

  return arrayWithNumrers;
}
