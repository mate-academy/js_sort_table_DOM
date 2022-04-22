'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRow = [...tableBody.rows];

tableHead.addEventListener('click', e => {
  const sortData = (index, tr) => {
    const words = string => string.children[index].innerText;
    const numbers = number => {
      return number
        .children[index]
        .innerText
        .slice(1)
        .split(',')
        .join('');
    };

    switch (tr) {
      case 'Salary':
        tableRow.sort((first, last) => {
          return numbers(first) - numbers(last);
        });
        break;

      default:
        tableRow.sort((first, last) => {
          return words(first).localeCompare(words(last));
        });
    };

    tableBody.append(...tableRow);
  };

  sortData(e.target.cellIndex, e.target.innerText);
});
