'use strict';

// write code here

const table = document.querySelector('table');

const headerIndex = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};

table.addEventListener('click', (event) => {
  const item = event.target;

  switch (item.textContent) {
    case 'Name':
      handleTableSort(headerIndex.Name);
      break;

    case 'Position':
      handleTableSort(headerIndex.Position);
      break;

    case 'Age':
      handleTableSort(headerIndex.Age);
      break;

    case 'Salary':
      handleTableSortForSalary(headerIndex.Salary);
      break;
  }
});

function handleTableSort(column) {
  const arrayOfColumn = [];

  for (let i = 0; i < table.tBodies[0].rows.length; i++) {
    arrayOfColumn[i]
  = table.tBodies[0].rows[i].cells[column].textContent;
  }
  arrayOfColumn.sort((a, b) => a.localeCompare(b));

  for (let u = 0; u < table.tBodies[0].rows.length; u++) {
    for (let y = 0; y < table.tBodies[0].rows.length; y++) {
      if (table.tBodies[0].rows[y].cells[column].textContent
        === arrayOfColumn[u]) {
        const copy = table.tBodies[0].rows[y];

        table.tBodies[0].insertBefore(copy, table.tBodies[0].rows[u]);
      }
    }
  }
}

function handleTableSortForSalary(column) {
  const arrayOfSalary2 = [];

  for (let q = 0; q < table.tBodies[0].rows.length; q++) {
    table.tBodies[0].rows[q].cells[column].textContent
      = Number(table.tBodies[0].rows[q].cells[column]
        .textContent.substring(1).replace(/,/g, ''));
  }

  for (let a = 0; a < table.tBodies[0].rows.length; a++) {
    arrayOfSalary2[a]
      = table.tBodies[0].rows[a].cells[column].textContent;
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
      .cells[column].textContent).split('');

    for (let y = arrayOfNumbers.length % 3; y < arrayOfNumbers.length;
      y = y + 3) {
      arrayOfNumbers[y - 1] = arrayOfNumbers[y - 1] + ',';
    }

    table.tBodies[0].rows[w].cells[column].textContent
      = '$' + arrayOfNumbers.join('');
  }
}
