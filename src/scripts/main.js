'use strict';

// write code here

const table = document.querySelector('table');

const headerIndex = {
  Name: 0,
  Position: 1,
  Age: 2,
  Salary: 3,
};
const person = [...table.tBodies[0].children];

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
      formatNumber(headerIndex.Salary);
      handleTableSort(headerIndex.Salary);
      formatSalary(headerIndex.Salary);
      break;
  }
});

function handleTableSort(column) {
  const rows = [...table.tBodies[0].children].sort(function(a, b) {
    if (column === headerIndex.Salary) {
      return a.children[column].textContent - b.children[column].textContent;
    } else {
      return a.children[column].textContent
        .localeCompare(b.children[column].textContent);
    }
  });

  table.tBodies[0].append(...rows);
}

function formatNumber(column) {
  for (let i = 0; i < person.length; i++) {
    person[i].children[column].textContent = +person[i].children[column]
      .textContent.substr(1).split(',').join('');
  }
  table.tBodies[0].append(...person);
}

function formatSalary(column) {
  for (let i = 0; i < person.length; i++) {
    person[i].children[column].textContent = `$${new Intl.NumberFormat('en-us')
      .format(person[i].children[column].textContent)}`;
  }
}
