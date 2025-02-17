'use strict';

const table = document.querySelector('table');
const tableBody = table.querySelector('tbody');

function parseSalary(rawSalaryString) {
  const salaryString = rawSalaryString.replace(/,/g, '').replace('$', '');

  return parseInt(salaryString) || 0;
}

/**
 * Create an array of objects from the table content
 */
const makeArrayFromTable = (dataTable) => {
  const objectsList = [];
  const dataTableBody = dataTable.querySelector('tbody');

  Array.from(dataTableBody.rows).forEach((row) => {
    const cells = Array.from(row.cells);
    const employeeObject = {
      0: cells[0].textContent,
      1: cells[1].textContent,
      2: parseInt(cells[2].textContent) || 0,
      3: parseSalary(cells[3].textContent),
    };

    objectsList.push(employeeObject);
  });

  return objectsList;
};

const employeesArray = makeArrayFromTable(table);

/**
 * Helper function to sort the array of object by given column
 * number based on the value type
 */
function sortObjectsArray(rawArray, columnIndex) {
  let sortedArray;

  if (rawArray[0]) {
    const valueType = typeof rawArray[0][columnIndex];

    if (valueType === 'number') {
      sortedArray = [...rawArray].sort((a, b) => {
        return a[columnIndex] - b[columnIndex];
      });
    } else if (valueType === 'string') {
      sortedArray = [...rawArray].sort((a, b) => {
        return a[columnIndex].localeCompare(b[columnIndex]);
      });
    }
  }

  return sortedArray;
}

/**
 * Create document fragment from the object to insert into <tbody>
 */
function getTableBodyContent(data) {
  const fragment = document.createDocumentFragment();

  data.forEach((object) => {
    const row = document.createElement('tr');

    for (let i = 0; i <= 3; i++) {
      const cell = document.createElement('td');

      cell.textContent = object[i];
      row.appendChild(cell);
    }

    fragment.appendChild(row);
  });

  return fragment;
}

/**
 * On click on the header cell sorts the table by the values
 * in the corresponding row in ASC order
 */
table.addEventListener('click', (e) => {
  const target = e.target;
  const isTableHeaderCell = target.tagName === 'TH';
  const isInTheadRow = target.parentNode.parentNode.tagName === 'THEAD';
  const isHeaderCell = isTableHeaderCell && isInTheadRow;

  if (isHeaderCell) {
    const columnIndex = Array.from(target.parentNode.children).indexOf(target);
    const sortedArray = sortObjectsArray(employeesArray, columnIndex);
    const sortedTableBody = getTableBodyContent(sortedArray);

    tableBody.innerHTML = '';
    tableBody.appendChild(sortedTableBody);
  }
});
