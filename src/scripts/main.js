'use strict';

const table = document.querySelector('table');
const headings = [{
  name: 'Name',
  type: 'string',
}, {
  name: 'Position',
  type: 'string',
},
{
  name: 'Office',
  type: 'string',
},
{
  name: 'Age',
  type: 'number',
},
{
  name: 'Salary',
  type: 'number',
}];

function parseSalary(a) {
  const element = (a.innerText).replace(/\$/g, '');
  const operand = parseFloat(element.replace(/,/g, ''));

  if (!Number.isNaN(operand)) {
    return (operand);
  }
};

function callback(heading) {
  switch (heading.type) {
    case 'string': return (x, y) => x.innerText.localeCompare(y.innerText);
    case 'number': return (x, y) => parseSalary(x) - parseSalary(y);
  }
}

const sort = function(cellInx, rowsCollection, heading) {
  let count;

  do {
    count = 0;

    for (let indx = 2; indx < rowsCollection.length - 1; indx++) {
      const a = rowsCollection[indx - 1].cells[cellInx];
      const b = rowsCollection[indx].cells[cellInx];

      if (callback(heading)(a, b) > 0) {
        rowsCollection[indx].after(rowsCollection[indx - 1]);
        count++;
      }
    }
  } while (count > 0);
};

const handler = function(e) {
  const element = e.target;

  if (!element.matches('th')) {
    return;
  }

  const rows = table.rows;
  const cellIndex = element.cellIndex;
  const heading = headings.find(elem => elem.name === element.innerText);

  sort(cellIndex, rows, heading);
};

table.addEventListener('click', handler);
