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
const headers = [...document.querySelector('table thead tr').children];
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

function attachListeners() {
  headers.forEach(header => {
    header.addEventListener('click', event => {
      let field = '';

      switch (headers.indexOf(header)) {
        case 0:
          field = 'name';
          break;
        case 1:
          field = 'position';
          break;
        case 2:
          field = 'age';
          break;
        case 3:
          field = 'salaryNum';
          break;
      }

      sortData(data, field);
      buildTable(data);
    });
  });
}

attachListeners();
