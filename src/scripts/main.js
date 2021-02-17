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
  let callback = null;

  this.useIndex = [...headers].findIndex(header => header.innerText === sortBy);

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
  // Я не смог придумать как по-другому передать useIndex в callback

  const sortedList = [...employees.children].sort(callback.bind(this));

  for (const employee of sortedList) {
    employees.append(employee);
  }
});

function compareStrings(a, b) {
  const stringA = a.children[this.useIndex].innerText;
  const stringB = b.children[this.useIndex].innerText;

  return stringA.localeCompare(stringB);
}

function compareNumbers(a, b) {
  const numA = getNumber(a.children[this.useIndex].innerText);
  const numB = getNumber(b.children[this.useIndex].innerText);

  return numA - numB;
}

function getNumber(line) {
  return +line.replace('$', '').replace(',', '');
}
