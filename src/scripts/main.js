'use strict';

// write code here

const peopleContainer = document.querySelector('tbody');
const people = [...peopleContainer.children];

const tableHeader = document.querySelector('thead');

tableHeader.addEventListener('click', (event) => {
  function sorter(index, tableRows, rowsContainer) {
    switch (index) {
      case 2:
        tableRows.sort((row1, row2) => {
          return +(row1.children[index].innerText)
          - +(row2.children[index].innerText);
        }).forEach(elem => rowsContainer.append(elem));
        break;

      case 3:
        tableRows.sort((row1, row2) => {
          return +(row1.children[index].innerText
            .slice(1)
            .split(',')
            .join(''))
          - +(row2.children[index].innerText
            .slice(1)
            .split(',')
            .join(''));
        }).forEach(elem => rowsContainer.append(elem));
        break;

      case 0:
      case 1:
      default:
        tableRows.sort((row1, row2) => {
          return (row1.children[index].innerText).localeCompare(
            row2.children[index].innerText
          );
        }).forEach(elem => rowsContainer.append(elem));
        break;
    };
  };

  sorter(event.target.cellIndex, people, peopleContainer);
});
