'use strict';

const columns = document.querySelectorAll('thead tr th');
const rows = document.querySelectorAll('tbody tr');
const users = [];

rows.forEach((row) => {
  const person = [];

  [...row.children].forEach((cell) => {
    person.push(cell.textContent);
  });

  users.push(person);
});

function sortByName(usersList) {
  return users.sort((user1, user2) => user1[0].localeCompare(user2[0]));
}

function sortByPosition(usersList) {
  return users.sort((user1, user2) => user1[1].localeCompare(user2[1]));
}

function sortByAge(usersList) {
  return users.sort((user1, user2) => user1[2] - user2[2]);
}

function sortBySalary(usersList) {
  users.sort((user1, user2) => {
    return wordToNumberAndBack(user1[3]) - wordToNumberAndBack(user2[3]);
  });
}

function wordToNumberAndBack(value) {
  let val = value;

  if (typeof val === 'string') {
    val = +val.slice(1).split(',').join('');
  } else {
    val = '$' + val;
  }

  return val;
}

columns.forEach((column) => {
  column.addEventListener('click', (e) => {
    const columnName = e.target.textContent;

    if (columnName === 'Name') {
      sortByName(users);
    }

    if (columnName === 'Position') {
      sortByPosition(users);
    }

    if (columnName === 'Age') {
      sortByAge(users);
    }

    if (columnName === 'Salary') {
      sortBySalary(users);
    }

    users.forEach((rowUser, rowIndex) => {
      const cells = rows[rowIndex].children;

      rowUser.forEach((value, cellIndex) => {
        cells[cellIndex].textContent = value;
      });
    });
  });
});
