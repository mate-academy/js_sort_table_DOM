'use strict';

const table = document.getElementsByTagName('table')[0];
const thead = table.tHead;

thead.addEventListener('click', (e) => {
  const cellIndex = e.target.cellIndex;

  const tbody = table.tBodies[0];

  const newList = sortedList(tbody.rows, cellIndex);

  const newTbody = createTbody(newList);

  tbody.remove();

  table.appendChild(newTbody);
});

function createTbody(arr) {
  const newTbody = document.createElement('tbody');

  arr.forEach((row) => {
    const newRow = document.createElement('tr');

    row.forEach((cell) => {
      const newCell = document.createElement('td');

      newCell.innerText = cell;
      newRow.appendChild(newCell);
    });

    newTbody.appendChild(newRow);
  });

  return newTbody;
}

function sortedList(rows, columnIndex) {
  const newList = [];

  for (let row = 0; row < rows.length; row++) {
    newList.push([]);

    for (let cell = 0; cell < rows[row].cells.length; cell++) {
      newList[row].push(rows[row].cells[cell].innerText);
    }
  }

  return newList.sort((a, b) => {
    if (columnIndex === 3) {
      return (
        a[columnIndex].replace(/\D/g, '') - b[columnIndex].replace(/\D/g, '')
      );
    } else {
      return a[columnIndex].localeCompare(b[columnIndex]);
    }
  });
}
