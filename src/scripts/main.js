'use strict';

const table = document.querySelector('tbody');
const head = document.querySelector('thead');

const dataArray = [];

function salaryToNumber(salary) {
  return salary.slice(1).split(',').join('');
}

function toFormat(data) {
  let resultString = data.toString();
  const result = [];

  do {
    if (resultString.length % 3) {
      result.push(resultString.slice(0, resultString.length % 3));
      resultString = resultString.slice(resultString.length % 3);
    }
    result.push(resultString.slice(0, 3));
    resultString = resultString.slice(3);
  } while (resultString.length > 0);

  return `$${result.join(',')}`;
}

for (const row of table.children) {
  const rowObject = {};

  rowObject.name = row.children[0].innerText;
  rowObject.position = row.children[1].innerText;
  rowObject.age = row.children[2].innerText;
  rowObject.salary = +salaryToNumber(row.children[3].innerText);
  dataArray.push(rowObject);
}

function sortTable(toSort, colum) {
  if (typeof toSort[0][colum.toLowerCase()] === 'string') {
    toSort.sort((a, b) =>
      a[colum.toLowerCase()].localeCompare(b[colum.toLowerCase()]));
  } else {
    toSort.sort((a, b) => a[colum.toLowerCase()] - b[colum.toLowerCase()]);
  }

  for (let i = 0; i < table.children.length; i++) {
    table.children[i].innerHTML = `
      <td>${dataArray[i].name}</td>
      <td>${dataArray[i].position}</td>
      <td>${dataArray[i].age}</td>
      <td>${toFormat(dataArray[i].salary)}</td>
    `;
  }
}

head.addEventListener('click', (evnt) => {
  sortTable(dataArray, evnt.target.innerText);
});
