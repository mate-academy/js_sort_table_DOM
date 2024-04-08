'use strict';

function salaryToText(text) {
  return (
    '$' +
    text
      .toString()
      .split('')
      .reduce(
        (modifiedText, char, index) =>
          modifiedText +
          char +
          ((text.toString().length - index - 1) % 3 === 0 ? ',' : ''),
        '',
      )
      .slice(0, -1)
  );
}

function refreshTable() {
  const tBody = document.querySelector('tbody');
  const newTBody = document.createElement('tbody');

  for (const person of people) {
    const row = document.createElement('tr');
    const cells = Array.from({ length: 4 }, () => document.createElement('td'));

    const { name: personName, position, age, salary } = person;

    cells[0].textContent = personName;
    cells[1].textContent = position;
    cells[2].textContent = age;
    cells[3].textContent = salaryToText(salary);

    cells.forEach((cell) => {
      row.append(cell);
    });

    newTBody.append(row);
  }

  tBody.replaceWith(newTBody);
}

function sortTable(tableEvent) {
  let comparator;

  switch (tableEvent.target.innerText) {
    case 'Name':
      comparator = (firstPerson, secondPerson) => {
        if (firstPerson.name > secondPerson.name) {
          return 1;
        }

        if (firstPerson.name < secondPerson.name) {
          return -1;
        }

        return 0;
      };
      break;
    case 'Position':
      comparator = (firstPerson, secondPerson) => {
        if (firstPerson.position > secondPerson.position) {
          return 1;
        }

        if (firstPerson.position < secondPerson.position) {
          return -1;
        }

        return 0;
      };
      break;
    case 'Age':
      comparator = (firstPerson, secondPerson) =>
        firstPerson.age - secondPerson.age;
      break;
    case 'Salary':
      comparator = (firstPerson, secondPerson) =>
        firstPerson.salary - secondPerson.salary;
  }

  people.sort(comparator);

  refreshTable();
}

const rows = document.querySelectorAll('tbody tr');
const people = [];
const headers = document.querySelectorAll('thead th');

rows.forEach((row) => {
  const cells = row.children;

  people.push({
    name: cells[0].innerText,
    position: cells[1].innerText,
    age: parseInt(cells[2].innerText),
    salary: parseInt(cells[3].innerText.replace(',', '').slice(1)),
  });
});

headers.forEach((header) => {
  header.addEventListener('click', sortTable);
});
