'use strict';

const tableName = document.getElementsByTagName('thead')[0]
  .children[0].children[0];
let nameBool = true;

const tablePosition = document.getElementsByTagName('thead')[0]
  .children[0].children[1];
let positionBool = true;

const tableAge = document.getElementsByTagName('thead')[0]
  .children[0].children[2];
let ageBool = true;

const tableSalary = document.getElementsByTagName('thead')[0]
  .children[0].children[3];
let salaryBool = true;

tableName.addEventListener('click', () => {
  sortByAplabet('name', nameBool);
  nameBool = !nameBool;
});

tablePosition.addEventListener('click', () => {
  sortByAplabet('position', positionBool);
  positionBool = !positionBool;
});

tableAge.addEventListener('click', () => {
  sortByNum('age', ageBool);
  ageBool = !ageBool;
});

tableSalary.addEventListener('click', () => {
  sortByNum('salary', salaryBool);
  salaryBool = !salaryBool;
});

function sortByNum(arg, bool) {
  const trs1 = document.getElementsByTagName('tbody')[0]
    .children;
  const tbody = document.getElementsByTagName('tbody')[0];

  const trs = [...trs1].filter(el => el.parentElement === tbody);

  const people = [];

  for (let i = 0; i < trs.length; i++) {
    const obj = {};

    obj.name = trs[i].children[0].textContent;
    obj.position = trs[i].children[1].textContent;
    obj.age = trs[i].children[2].textContent;

    obj.salary = +trs[i].children[3].textContent
      .replaceAll(',', '').replace('$', '');

    people.push(obj);
  }

  let sorted = [];

  if (bool) {
    sorted = people.sort((a, b) => parseInt(a[arg])
    - parseInt(b[arg]));
  } else {
    sorted = people.sort((a, b) => parseInt(b[arg])
    - parseInt(a[arg]));
  }

  for (let i = 0; i < trs.length; i++) {
    trs[i].remove();
  }

  for (let i = 0; i < sorted.length; i++) {
    tbody.insertAdjacentHTML(`beforeend`, `
    <tr>
        <td>${sorted[i].name}</td>
        <td>${sorted[i].position}</td>
        <td>${sorted[i].age}</td>
        <td>${sorted[i].salary.toLocaleString('en-US')}</td>
      </tr>
  `);
  }
}

function sortByAplabet(arg, bool) {
  const trs1 = document.getElementsByTagName('tbody')[0]
    .children;
  const tbody = document.getElementsByTagName('tbody')[0];

  const trs = [...trs1].filter(el => el.parentElement === tbody);

  const people = [];

  for (let i = 0; i < trs.length; i++) {
    const obj = {};

    obj.name = trs[i].children[0].textContent;
    obj.position = trs[i].children[1].textContent;
    obj.age = trs[i].children[2].textContent;
    obj.salary = trs[i].children[3].textContent;

    people.push(obj);
  }

  let sorted = [];

  if (bool) {
    sorted = people
      .sort((a, b) => a[arg].localeCompare(b[arg]));
  } else {
    sorted = people
      .sort((a, b) => b[arg].localeCompare(a[arg]));
  }

  for (let i = 0; i < trs.length; i++) {
    trs[i].remove();
  }

  for (let i = 0; i < sorted.length; i++) {
    tbody.insertAdjacentHTML(`beforeend`, `
    <tr>
        <td>${sorted[i].name}</td>
        <td>${sorted[i].position}</td>
        <td>${sorted[i].age}</td>
        <td>${sorted[i].salary}</td>
      </tr>
  `);
  }
}
