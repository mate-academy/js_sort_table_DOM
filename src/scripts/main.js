'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');
const bodyRows = body.querySelectorAll('tr');

head.addEventListener('click', (e) => {
  const hader = e.target;
  const index = hader.cellIndex;

  if (!head.children) {
    return;
  }

  switch (index) {
    case 0:
    case 1:
      sortListWords(index);
      break;
    case 2:
    case 3: sortListNumbers(index);
      break;
  }
});

function sortListWords(column) {
  const sort = [...bodyRows].sort((a, b) => {
    const arg1 = a.children[column].innerHTML;
    const arg2 = b.children[column].innerHTML;

    return arg1.localeCompare(arg2);
  });

  for (const item of sort) {
    body.append(item);
  }
}

function sortListNumbers(column) {
  const sort = [...bodyRows].sort((a, b) => {
    const arg1 = a.children[column].innerHTML;
    const arg2 = b.children[column].innerHTML;

    if (column === 3) {
      return convertIntoNumber(arg1) - convertIntoNumber(arg2);
    }

    return +arg1 - (+arg2);
  });

  for (const item of sort) {
    body.append(item);
  }
}

function convertIntoNumber(arrayWithStrings) {
  const removeSign = arrayWithStrings.replace(',', '');
  const arrayWithNumrers = Number(removeSign.slice(1));

  return arrayWithNumrers;
}
