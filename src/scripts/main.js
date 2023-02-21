'use strict';

// write code here

const table = document.getElementsByTagName('table');

const people = table[0].children[1].children;

const thead = document.querySelector('thead')

const columns = thead.children[0]

const headers = [...table[0].children[0].children[0].children];

columns.addEventListener('click', () =>
  sortColumn(headers.indexOf(event.target))
);

function getClearData(data, index) {

  let clearData;

  switch (index) {
    case 0:
      clearData = data.toLowerCase();
      break;

    case 1:
      clearData = data.toLowerCase();
      break;

    case 2:
      clearData = +data;
      break;

    case 3:
      clearData = +data.slice(1).replace(',', '');
      break;
  }

  return clearData;
}

function getComparison(x, y) {
  let comparisonResult;

  if (typeof x === 'string') {
    comparisonResult = x.localeCompare(y);
  } else {
    comparisonResult = x > y ? 1 : 0;
  }

  return comparisonResult;
}

function sortColumn(index) {
  let switching = true;

  let shouldSwitch;

  let x, y, i;

  while (switching) {
    switching = false;

    for (i = 0; i < (people.length - 1); i++) {
      shouldSwitch = false;
      x = getClearData(people[i].children[index].innerText, index);
      y = getClearData(people[i + 1].children[index].innerText, index);

      if (getComparison(x, y) === 1) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      people[i].parentNode.insertBefore(people[i + 1], people[i]);
      switching = true;
    }
  }
}
