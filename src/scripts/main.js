'use strict';

const theadRow = document.querySelector('thead tr');

theadRow.addEventListener('click', (e) => {
  const headerIndex = e.target.cellIndex + 1;
  const columnValues = document
    .querySelectorAll(`tbody tr td:nth-child(${headerIndex})`);
  const values = [...columnValues].map(value => {
    return value.innerText;
  });

  values.sort((a, b) => {
    let value1 = a;
    let value2 = b;

    if (a.startsWith('$') || b.startsWith('$')) {
      value1 = a.replace(/[^0-9]/g, '');
      value2 = b.replace(/[^0-9]/g, '');

      return value1 - value2;
    }

    return value1.localeCompare(value2);
  });

  columnValues.forEach((elem, i) => {
    columnValues[i].innerText = values[i];
  });
});
