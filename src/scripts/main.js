'use strict';

const tableElement = document.querySelector('table');
const theadElement = tableElement.querySelector('thead');
const tbodyElement = tableElement.querySelector('tbody');
const rowsArray = Array.from(tbodyElement.rows);

const headerElements = [...theadElement.firstElementChild.children];

headerElements.map((x, index) => {
  x.addEventListener('click', (e) => {
    rowsArray.sort((element1, element2) => {
      let firstCell = element1.cells[index].textContent.trim();
      let secondCell = element2.cells[index].textContent.trim();

      firstCell = firstCell.includes('$')
        ? Number(firstCell.replace('$', '').replaceAll(',', ''))
        : firstCell;

      secondCell = secondCell.includes('$')
        ? Number(secondCell.replace('$', '').replaceAll(',', ''))
        : secondCell;

      if (firstCell < secondCell) {
        return -1;
      }

      if (firstCell > secondCell) {
        return 1;
      }

      return 0;
    });

    while (tbodyElement.firstChild) {
      tbodyElement.removeChild(tbodyElement.firstChild);
    }

    rowsArray.forEach((item) => tbodyElement.appendChild(item));
  });
});

