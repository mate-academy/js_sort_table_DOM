'use strict';

const table = document.querySelector('table');

const head = table.querySelector('thead');
const body = table.querySelector('tbody');

const employeeArr = [];

body.querySelectorAll('tr').forEach(row => {
  const rowValue = row.querySelectorAll('td');

  employeeArr.push({
    name: rowValue[0].textContent,
    position: rowValue[1].textContent,
    age: +rowValue[2].textContent,
    salary: parseFloat(rowValue[3].textContent.slice(1))
  });
});

const headers = head.querySelectorAll('th');

headers.forEach((th, index) => {
  th.addEventListener('click', () => {
    const fieldNames = ['name', 'position', 'age', 'salary'];
    const field = fieldNames[index];

    employeeArr.sort((a, b) => {
      if (typeof a[field] === 'string') {
        return a[field].localeCompare(b[field]);
      } else {
        return a[field] - b[field];
      }
    })

    body.innerHTML = '';

    employeeArr.forEach(emp => {
      const tr = document.createElement('tr');
      tr.innerHTML = `
        <td>${emp.name}</td>
        <td>${emp.position}</td>
        <td>${emp.age}</td>
        <td>$${emp.salary.toFixed(2)}</td>
      `;
      body.appendChild(tr);
    })
  })
})

