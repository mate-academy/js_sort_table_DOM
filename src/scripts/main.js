'use strict';

const tableHeader = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const allRawData = document.querySelectorAll('td');
const readyData = [];

for (const head of tableHeader.children) {
  for (const info of head.children) {
    info.addEventListener('click', () => {
      sort(info.textContent);
    });
  }
}

for (let i = 0; i < allRawData.length; i += 4) {
  readyData.push({
    name: allRawData[i].textContent,
    position: allRawData[i + 1].textContent,
    age: allRawData[i + 2].textContent,
    salary: allRawData[i + 3].textContent,
  });
}

function sort(sortBy) {
  const newData = readyData.sort((a, b) => {
    switch (sortBy) {
      case 'Name':
        return a.name.localeCompare(b.name);

      case 'Position':
        return a.position.localeCompare(b.position);

      case 'Age':
        return a.age - b.age;

      case 'Salary':
        return (
          a.salary.slice(1).split(',').join('') -
          b.salary.slice(1).split(',').join('')
        );
    }
  });

  let i = 0;
  for (const person of newData) {
    allRawData[i++].textContent = person.name;
    allRawData[i++].textContent = person.position;
    allRawData[i++].textContent = person.age;
    allRawData[i++].textContent = person.salary;
  }
}
