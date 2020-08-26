'use strict';

const data = [...document.querySelector('tbody').children].map(element => {
  return {
    name: element.children[0].textContent,
    position: element.children[1].textContent,
    age: Number(element.children[2].textContent),
    salary: element.children[3].textContent,
    salaryNum: formatSalary(element.children[3].textContent),
  };
});
const nameHeader = document.querySelector('table thead tr').children[0];
const positionHeader = document.querySelector('table thead tr').children[1];
const ageHeader = document.querySelector('table thead tr').children[2];
const salaryHeader = document.querySelector('table thead tr').children[3];
const tableContent = document.querySelector('tbody');

function formatSalary(string) {
  let checkingArray = string.split('');

  checkingArray = checkingArray.filter(element => !isNaN(element));

  return Number(checkingArray.join(''));
}

function sortData(array, field) {
  if (field === 'name' || field === 'position') {
    array.sort((a, b) => a[field].localeCompare(b[field]));
  } else {
    array.sort((a, b) => a[field] - b[field]);
  }
}

function buildTable(array) {
  let insertedCode = '';

  array.forEach(employee => {
    insertedCode += `
      <tr>
        <td>${employee.name}</td>
        <td>${employee.position}</td>
        <td>${employee.age}</td>
        <td>${employee.salary}</td>
      </tr>
    `;
  });

  tableContent.innerHTML = insertedCode;
}

nameHeader.addEventListener('click', event => {
  sortData(data, 'name');
  buildTable(data);
});

positionHeader.addEventListener('click', event => {
  sortData(data, 'position');
  buildTable(data);
});

ageHeader.addEventListener('click', event => {
  sortData(data, 'age');
  buildTable(data);
});

salaryHeader.addEventListener('click', event => {
  sortData(data, 'salaryNum');
  buildTable(data);
});
