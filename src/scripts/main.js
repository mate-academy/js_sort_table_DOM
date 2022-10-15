'use strict';

const heads = document.querySelectorAll('th');
const rows = document.querySelectorAll('tr');
const arrTable = [];
let sortColumns;

rows.forEach((row, index) => {
  if (index !== 0 && index !== rows.length - 1) {
    arrTable.push({
      name: row.children[0].innerText,
      position: row.children[1].innerText,
      age: row.children[2].innerText,
      salary: row.children[3].innerText,
    });
  }
});

const sortTable = (sortedBy) => {
  sortedBy();

  rows.forEach((row, index) => {
    if (index !== 0 && index !== rows.length - 1) {
      row.children[0].innerText = arrTable[index - 1].name;
      row.children[1].innerText = arrTable[index - 1].position;
      row.children[2].innerText = arrTable[index - 1].age;
      row.children[3].innerText = arrTable[index - 1].salary;
    }
  });
};

heads.forEach(item => {
  if (item.closest('thead')) {
    item.addEventListener('click', (e) => {
      switch (e.target.innerText) {
        case 'Name':
          sortColumns = () => {
            arrTable.sort((a, b) => a.name.localeCompare(b.name));
          };
          break;

        case 'Position':
          sortColumns = () => {
            arrTable.sort((a, b) => a.position.localeCompare(b.position));
          };
          break;

        case 'Age':
          sortColumns = () => {
            arrTable.sort((a, b) => a.age - b.age);
          };
          break;

        case 'Salary':
          sortColumns = () => {
            arrTable.sort((a, b) => parseFloat(a.salary.slice(1))
              - parseFloat(b.salary.slice(1)));
          };
          break;
      }

      sortTable(sortColumns);
    });
  }
});
