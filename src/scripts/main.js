'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const elements = tableBody.querySelectorAll('tr');
const users = [];

tableHead.addEventListener('click', e => {
  const element = e.target;

  if (element.tagName === 'TH') {
    sortTable(users, element.innerText);
    createTable(users);
  }
});

elements.forEach(tr => {
  users.push(
    {
      Name: tr.children[0].innerText,
      Position: tr.children[1].innerText,
      Age: Number(tr.children[2].innerText),
      Salary: Number(tr.children[3].innerText.replace(/[$,]/g, '')),
    }
  );
});

const sortTable = (table, value) => {
  table.sort((a, b) => {
    if (typeof a[value] === 'number') {
      return a[value] - b[value];
    } else if (typeof a[value] === 'string') {
      return a[value].localeCompare(b[value]);
    }

    throw new Error('wrong typeof value');
  });
};

const createTable = (table) => {
  tableBody.innerHTML = '';

  table.forEach(element => {
    const tableElement = document.createElement('tr');
    const salary = element.Salary.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    });

    tableElement.innerHTML = (
      `<td>${element.Name}</td>
      <td>${element.Position}</td>
      <td>${element.Age}</td>
      <td>${salary}</td>`
    );

    tableBody.appendChild(tableElement);
  });
};
