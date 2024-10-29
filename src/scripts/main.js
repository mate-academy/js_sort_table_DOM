'use strict';

const title = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');
const list = document.querySelectorAll('tbody tr');

title.addEventListener('click', (element) => {
  if (element.target.tagName === 'TH') {
    let columnIndex;

    if (element.target.textContent === 'Name') {
      columnIndex = 1;
    } else if (element.target.textContent === 'Position') {
      columnIndex = 2;
    } else if (element.target.textContent === 'Age') {
      columnIndex = 3;
    } else if (element.target.textContent === 'Salary') {
      columnIndex = 4;
    }

    if (columnIndex) {
      const rowsArray = Array.from(list);

      rowsArray.sort((a, b) => {
        const aText = a.querySelector(
          `td:nth-child(${columnIndex})`,
        ).textContent;
        const bText = b.querySelector(
          `td:nth-child(${columnIndex})`,
        ).textContent;

        if (columnIndex >= 3) {
          return (
            parseFloat(aText.replace(/[^0-9.-]+/g, '')) -
            parseFloat(bText.replace(/[^0-9.-]+/g, ''))
          );
        }

        return aText.localeCompare(bText);
      });

      tbody.innerHTML = '';

      rowsArray.forEach((row) => tbody.appendChild(row));
    }
  }
});
