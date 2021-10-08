'use strict';

const table = document.querySelector('table');
const tableHead = document.querySelector('thead');
const tableHeadColumns = tableHead.querySelectorAll('th');
const tableContent = document.querySelector('tbody');
const rows = tableContent.querySelectorAll('tr');
const tableArr = [];

rows.forEach((row) => {
  const rowObj = {};

  let i = 0;

  for (const tableHeadColum of tableHeadColumns) {
    const key = tableHeadColum.textContent;

    rowObj[key] = row.children[i].textContent;
    i++;
  };

  rowObj.salary2 = rowObj.Salary.split(',').join('').replace('$', '');
  tableArr.push(rowObj);
});

tableHead.addEventListener('click', (events) => {
  const sortKey = events.target.textContent;

  switch (sortKey) {
    case 'Name':
      tableArr.sort((a, b) => a.Name.localeCompare(b.Name));
      break;

    case 'Position':
      tableArr.sort((a, b) => a.Position.localeCompare(b.Position));
      break;

    case 'Age':
      tableArr.sort((x, y) => x[sortKey] - y[sortKey]); ;
      break;

    case 'Salary':
      tableArr.sort((x, y) => x.salary2 - y.salary2);
  };

  tableContent.remove();

  const tableBodyNew = document.createElement('tbody');

  table.children[0].after(tableBodyNew);

  tableArr.forEach((row) => {
    const trElement = document.createElement('tr');

    trElement.innerHTML = `
      <td>${row.Name}</td>
      <td>${row.Position}</td>
      <td>${row.Age}</td>
      <td>${row.Salary}</td>`;
    tableBodyNew.append(trElement);
  });
});
