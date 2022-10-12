'use strict';

const heads = document.querySelectorAll('th');
const rows = document.querySelectorAll('tr');
const arr = [];
const obj = {};

rows.forEach((row, index) => {
  if (index !== 0 && index !== rows.length - 1) {
    obj.name = row.children[0].innerText;
    obj.position = row.children[1].innerText;
    obj.age = row.children[2].innerText;
    obj.salary = row.children[3].innerText;

    arr.push(Object.assign({}, obj));
  }
});

const sortTable = (sortedBy) => {
  if (sortedBy === 'names') {
    arr.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortedBy === 'positions') {
    arr.sort((a, b) => a.position.localeCompare(b.position));
  } else if (sortedBy === 'ages') {
    arr.sort((a, b) => a.age - b.age);
  } else if (sortedBy === 'salaries') {
    arr.sort((a, b) => parseFloat(a.salary.slice(1))
    - parseFloat(b.salary.slice(1)));
  }

  rows.forEach((row, index) => {
    if (index !== 0 && index !== rows.length - 1) {
      row.children[0].innerText = arr[index - 1].name;
      row.children[1].innerText = arr[index - 1].position;
      row.children[2].innerText = arr[index - 1].age;
      row.children[3].innerText = arr[index - 1].salary;
    }
  });
};

heads.forEach(item => {
  if (item.closest('thead')) {
    item.addEventListener('click', (e) => {
      switch (e.target.innerText) {
        case 'Name':
          sortTable('names');
          break;

        case 'Position':
          sortTable('positions');
          break;

        case 'Age':
          sortTable('ages');
          break;

        case 'Salary':
          sortTable('salaries');
          break;
      }
    });
  }
});
