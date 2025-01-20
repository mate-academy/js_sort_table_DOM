/* eslint-disable no-unused-expressions */
'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');

tableHead.addEventListener('click', (e) => {
  const columnName = e.target.closest('th');
  const rows = tableBody.rows;
  const people = [];

  for (const row of rows) {
    people.push({
      Name: row.cells[0].textContent,
      Position: row.cells[1].textContent,
      Age: row.cells[2].textContent,
      Salary: row.cells[3].textContent,
    });
  }

  const sortedName = columnName.textContent.trim();

  people.sort((person1, person2) => {
    if (sortedName === 'Name' || sortedName === 'Position') {
      return person1[sortedName].localeCompare(person2[sortedName]);
    }

    if (sortedName === 'Age') {
      return parseInt(person1[sortedName]) - parseInt(person2[sortedName]);
    }

    if (sortedName === 'Salary') {
      const salary1 = parseInt(person1[sortedName].replace(/[^0-9]/g, ''), 10);
      const salary2 = parseInt(person2[sortedName].replace(/[^0-9]/g, ''), 10);

      return salary1 - salary2;
    }
  });

  tableBody.innerHTML = '';

  for (const person of people) {
    const row = document.createElement('tr');

    row.innerHTML = `
      <td>${person.Name}</td>
      <td>${person.Position}</td>
      <td>${person.Age}</td>
      <td>${person.Salary}</td>
    `;

    tableBody.appendChild(row);
  }
});
