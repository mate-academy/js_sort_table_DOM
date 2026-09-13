'use strict';

// write code here
const tableHead = document.querySelector('thead');
const people = [...document.querySelectorAll('tbody tr')].map((row) => {
  const person = {};
  const rowCells = row.children;

  person.Name = rowCells[0].textContent;
  person.Position = rowCells[1].textContent;
  person.Age = rowCells[2].textContent;
  person.Salary = rowCells[3].textContent;

  return person;
});

tableHead.addEventListener('click', (e) => {
  if (e.target.tagName === 'TH') {
    const sortBy = e.target.textContent;

    if (['Name', 'Position'].includes(sortBy)) {
      people.sort((person1, person2) => {
        return person1[sortBy].localeCompare(person2[sortBy]);
      });
    } else if (sortBy === 'Salary') {
      people.sort(
        (person1, person2) =>
          +person1[sortBy].replaceAll(/\W/g, '') -
          +person2[sortBy].replaceAll(/\W/g, ''),
      );
    } else {
      people.sort((person1, person2) => +person1[sortBy] - +person2[sortBy]);
    }

    const sortedTableBody = document.createElement('tbody');

    for (const person of people) {
      const newRow = document.createElement('tr');

      for (const item of Object.values(person)) {
        const cell = document.createElement('td');

        cell.textContent = item;
        newRow.append(cell);
      }

      sortedTableBody.append(newRow);
    }

    document.querySelector('tbody').replaceWith(sortedTableBody);
  }
});
