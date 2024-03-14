'use strict';

// write code here
function eventListener(e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  let colIndex = 0;

  for (
    let node = e.target.previousElementSibling;
    node;
    node = node.previousElementSibling
  ) {
    colIndex++;
  }

  let isNumber;

  switch (e.target.innerText.toUpperCase()) {
    case 'AGE':
    case 'SALARY':
      isNumber = true;
      break;
    default:
      isNumber = false;
  }

  let table = e.target;

  while (table.tagName !== 'TABLE') {
    table = table.parentNode;

    if (table === null) {
      throw new Error('th not isnsie table');
    }
  }

  const rows = Array.from(table.querySelectorAll('tbody tr'));

  rows.sort((a, b) => {
    const textA = a.children.item(colIndex).innerText;
    const textB = b.children.item(colIndex).innerText;

    return isNumber
      ? compareNumbers(textA, textB)
      : compareStrings(textA, textB);
  });

  const tbody = table.querySelector('tbody');

  rows.forEach((row) => tbody.append(row));
}

const compareNumbers = (a, b) => +a.replace(/\D/g, '') - +b.replace(/\D/g, '');
const compareStrings = (a, b) => a.localeCompare(b);

document.addEventListener('click', eventListener);
