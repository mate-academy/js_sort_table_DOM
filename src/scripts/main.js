'use strict';

// write code here

const table = document.querySelector('table');

table.addEventListener('click', (event) => {
  const item = event.target;
  let countOfColumn;

  switch (item.textContent) {
    case 'Name':
      countOfColumn = 0;
      break;

    case 'Position':
      countOfColumn = 1;
      break;

    case 'Age':
      countOfColumn = 2;
      break;

    case 'Salary':
      countOfColumn = 3;
      break;
  }

  if (countOfColumn === 3) {
    const arrayOfSalary2 = [];

    for (let q = 0; q < table.tBodies[0].rows.length; q++) {
      table.tBodies[0].rows[q].cells[countOfColumn].textContent
      = Number(table.tBodies[0].rows[q].cells[countOfColumn]
          .textContent.substring(1).replace(/,/g, ''));
    }

    for (let a = 0; a < table.tBodies[0].rows.length; a++) {
      arrayOfSalary2[a]
      = table.tBodies[0].rows[a].cells[countOfColumn].textContent;
    }
    arrayOfSalary2.sort((a, b) => a - b);

    for (let s = 0; s < table.tBodies[0].rows.length; s++) {
      for (let d = 0; d < table.tBodies[0].rows.length; d++) {
        if (table.tBodies[0].rows[d].cells[3].textContent
          === arrayOfSalary2[s]) {
          const copy = table.tBodies[0].rows[d];

          table.tBodies[0].insertBefore(copy, table.tBodies[0].rows[s]);
        }
      }
    }

    for (let w = 0; w < table.tBodies[0].rows.length; w++) {
      const arrayOfNumbers = String(table.tBodies[0].rows[w]
        .cells[countOfColumn].textContent).split('');

      for (let y = arrayOfNumbers.length % 3; y < arrayOfNumbers.length;
        y = y + 3) {
        arrayOfNumbers[y - 1] = arrayOfNumbers[y - 1] + ',';
      }

      table.tBodies[0].rows[w].cells[countOfColumn].textContent
      = '$' + arrayOfNumbers.join('');
    }
  } else {
    const arrayOfColumn = [];

    for (let i = 0; i < table.tBodies[0].rows.length; i++) {
      arrayOfColumn[i]
    = table.tBodies[0].rows[i].cells[countOfColumn].textContent;
    }
    arrayOfColumn.sort((a, b) => a.localeCompare(b));

    for (let u = 0; u < table.tBodies[0].rows.length; u++) {
      for (let y = 0; y < table.tBodies[0].rows.length; y++) {
        if (table.tBodies[0].rows[y].cells[countOfColumn].textContent
          === arrayOfColumn[u]) {
          const copy = table.tBodies[0].rows[y];

          table.tBodies[0].insertBefore(copy, table.tBodies[0].rows[u]);
        }
      }
    }
  }
});
