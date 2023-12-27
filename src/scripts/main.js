'use strict';

const tbody = document.querySelector('tbody');
const people = createArray(tbody.rows);
const thead = document.querySelector('thead');

thead.addEventListener('click', sortTable);

function createArray(htmlRows) {
  const finalArray = [];

  for (let i = 0; i < htmlRows.length; i++) {
    finalArray.push({
      name: htmlRows[i].children[0].textContent,
      position: htmlRows[i].children[1].textContent,
      age: htmlRows[i].children[2].textContent,
      salary: htmlRows[i].children[3].textContent,
    });
  }

  return finalArray;
}

function sortTable(e) {
  if (e.target.tagName !== 'TH') {
    return;
  }

  sortArray(people, e.target.textContent);

  for (let j = 0; j < people.length; j++) {
    for (const item of tbody.rows) {
      if (item.cells[0].textContent === people[j].name) {
        tbody.append(item);
      }
    }
  };
}

function sortArray(array, markerName) {
  array.sort(sortingSelective(markerName));
}

function sortingSelective(type) {
  switch (true) {
    case (type === 'Name' || type === 'Position'):
      return function(a, b) {
        return a[type.toLowerCase()].localeCompare(b[type.toLowerCase()]);
      };

    case (type === 'Age'):
      return (a, b) => a.age - b.age;

    case (type === 'Salary'):
      return function(a, b) {
        const formated = (rare) => rare.slice(1).replace(',', '');

        return formated(a.salary) - formated(b.salary);
      };

    default:
      break;
  }
}
