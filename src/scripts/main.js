'use strict';

// write code here
const tableHeads = document.querySelectorAll('table th');
const rows = document.querySelectorAll('table tbody tr');
const tbody = document.querySelector('tbody');
const arrayHeads = [...tableHeads];
const arrayRows = [...rows];

function sorterOfRows(lines, index) {
  if (index === 0 || index === 1) {
    lines.sort((a, b) => {
      const textA = a.children[index].textContent;
      const textB = b.children[index].textContent;

      return textA.localeCompare(textB);
    });
  } else if (index === 2) {
    lines.sort((a, b) => {
      return (
        Number(a.children[index].textContent) -
        Number(b.children[index].textContent)
      );
    });
  } else if (index === 3) {
    lines.sort((a, b) => {
      const salA = a.children[index].textContent
        .split('')
        .splice(1)
        .join('')
        .split(',')
        .join('');
      const salB = b.children[index].textContent
        .split('')
        .splice(1)
        .join('')
        .split(',')
        .join('');

      return Number(salA) - Number(salB);
    });
  }
}

for (let i = 0; i < arrayHeads.length; i++) {
  arrayHeads[i].addEventListener('click', () => {
    sorterOfRows(arrayRows, i);
    tbody.append(...arrayRows);
  });
}
