'use strict';

// write code here
const table = document.querySelector('table');

const listElements = [...table.children[1].children];

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  let sortElements = '';
  const index = e.target.cellIndex;
  const tableCell = e.target.textContent;

  if (tableCell === 'Name' || tableCell === 'Position') {
    sortElements = listElements.sort((a, b) => {
      return a.children[index].textContent
        .localeCompare(b.children[index].textContent);
    });
  }

  if (tableCell === 'Age') {
    sortElements = listElements.sort((a, b) => {
      return (+a.children[index].textContent) - (+b
        .children[index].textContent);
    });
  }

  if (tableCell === 'Salary') {
    const convertToNumber = (value) => {
      return +(value.children[index].textContent.split(',').join('').slice(1));
    };

    sortElements = listElements.sort((a, b) => {
      return (convertToNumber(a)) - (convertToNumber(b));
    });
  }

  sortElements.forEach(el => table.children[1].appendChild(el));
});
