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
      handleTableSort(headerIndex.Salary);
      break;
  }
});

function handleTableSort(column) {
  const rows = [...table.tBodies[0].children].sort(function(a, b) {
    if (column === headerIndex.Salary) {
      return formatNumber(a.children[column].textContent)
       - formatNumber(b.children[column].textContent);
    } else {
      return a.children[column].textContent
        .localeCompare(b.children[column].textContent);
    }
  });

  table.tBodies[0].append(...rows);
}

function formatNumber(salary) {
  return +salary.substr(1).split(',').join('');
}
