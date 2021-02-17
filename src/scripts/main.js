'use strict';

const table = document.querySelector('table');
const employees = document.querySelector('tbody');
const headers = document.querySelector('thead').children[0].children;

[...headers].forEach(header => {
  const container = document.createElement('span');

  container.append(header.firstChild);
  header.append(container);
});

table.addEventListener('click', function(e) {
  if (e.target.tagName !== 'SPAN') {
    return;
  }

  const sortBy = e.target.innerText;
  const index = [...headers].findIndex(header => header.innerText === sortBy);
  let callback = null;

  switch (sortBy.toLowerCase()) {
    case 'name':
    case 'position':
      callback = compareStrings;
      break;
    case 'age':
    case 'salary':
      callback = compareNumbers;
      break;
  }

  const sortedList = [...employees.children].sort((a, b) => {
    return callback(a, b, index);
  });

  for (const employee of sortedList) {
    employees.append(employee);
  }
});

function compareStrings(a, b, index) {
  const stringA = a.children[index].innerText;
  const stringB = b.children[index].innerText;

  return stringA.localeCompare(stringB);
}

function compareNumbers(a, b, index) {
  const numA = getNumber(a.children[index].innerText);
  const numB = getNumber(b.children[index].innerText);

  return numA - numB;
}

function getNumber(line) {
  return +line.replace('$', '').replace(',', '');
}
