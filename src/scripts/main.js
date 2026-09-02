'use strict';

const tableBody = document.querySelector('tbody');
const headRow = document.querySelector('thead').querySelector('tr');
const people = [...tableBody.children];

function compareNum(a, b, i) {
  return (
    Number(a.children[i].textContent.replace(/[$,]/g, '')) -
    Number(b.children[i].textContent.replace(/[$,]/g, ''))
  );
}

function compareString(a, b, i) {
  return a.children[i].textContent.localeCompare(b.children[i].textContent);
}

function sort(columnIndex, compareFunction) {
  const sorted = [...people].sort((a, b) => compareFunction(a, b, columnIndex));

  for (const person of sorted) {
    tableBody.append(person);
  }
}

headRow.addEventListener('click', (e) => {
  if (e.target.textContent === 'Age') {
    sort(2, compareNum);
  } else if (e.target.textContent === 'Salary') {
    sort(3, compareNum);
  } else if (e.target.textContent === 'Name') {
    sort(0, compareString);
  } else {
    sort(1, compareString);
  }
});
