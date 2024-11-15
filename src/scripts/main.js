'use strict';

const head = document.querySelector('thead');

// console.log(head);

head.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    // head
    const cells = head.querySelectorAll('th');
    const cellsArr = [...cells];
    const index = cellsArr.indexOf(e.target);

    // body find column
    const body = document.querySelector('tbody');
    const bodyRows = body.querySelectorAll('tr');
    const bodyRowsArr = [...bodyRows];

    // body sort column
    const rowsWithValues = bodyRowsArr.map((row) => {
      const cellValue = row.children[index].textContent.trim();
      const numericValue = parseFloat(
        cellValue.replace('$', '').replace(',', ''),
      );

      return {
        value: isNaN(numericValue) ? cellValue : numericValue,
        row: row,
      };
    });

    const isNumeric = rowsWithValues.every(
      (item) => typeof item.value === 'number',
    );

    rowsWithValues.sort((a, b) => {
      if (isNumeric) {
        return a.value - b.value;
      } else {
        return a.value.localeCompare(b.value);
      }
    });

    rowsWithValues.forEach((item) => body.appendChild(item.row));
  }
});
