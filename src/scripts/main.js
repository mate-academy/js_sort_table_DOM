'use strict';

const tableElement = document.querySelector('table');

tableElement.addEventListener('click', (e) => {
  const thElement = e.target.closest('th');

  if (!thElement) {
    return;
  }

  const tableRows = e.currentTarget.querySelectorAll('tbody tr');

  const users = [...tableRows]
    .map((row) => {
      const tdElements = row.querySelectorAll('td');

      if (tdElements.length < 4) {
        return;
      }

      return {
        Name: tdElements[0].textContent,
        Position: tdElements[1].textContent,
        Age: tdElements[2].textContent,
        Salary: tdElements[3].textContent,
      };
    })
    .filter(Boolean);

  const sortBy = thElement.textContent;

  if (sortBy === 'Name' || sortBy === 'Position') {
    users.sort((u1, u2) => u1[sortBy].localeCompare(u2[sortBy]));
  } else if (sortBy === 'Age') {
    users.sort((u1, u2) => u1[sortBy] - u2[sortBy]);
  } else {
    users.sort((u1, u2) => {
      const salary1 = Number(u1.Salary.replace('$', '').replaceAll(',', ''));
      const salary2 = Number(u2.Salary.replace('$', '').replaceAll(',', ''));

      return salary1 - salary2;
    });
  }

  const sortedTableRows = users
    .map(({ Name, Position, Age, Salary }) => {
      return `<tr>
        <td>${Name}</td>
        <td>${Position}</td>
        <td>${Age}</td>
        <td>${Salary}</td>
      </tr>`;
    })
    .join('');

  const tbodyElement = e.currentTarget.querySelector('tbody');

  tbodyElement.innerHTML = sortedTableRows;
});
