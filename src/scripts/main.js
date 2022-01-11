'use strict';

const table = document.querySelector('table');
const tBodyChild = document.querySelector('tBody').children;
const tBody = document.querySelector('tBody');
const data = [];

for (const man of tBodyChild) {
  data.push({
    name: man.children[0].textContent,
    position: man.children[1].textContent,
    age: man.children[2].textContent,
    salary: man.children[3].textContent,
  });
}

table.addEventListener('click', e => {
  const item = e.target.closest('th');

  if (!item) {
    return;
  }

  switch (e.target.textContent) {
    case 'Name':
      data.sort((a, b) => a.name.localeCompare(b.name));
      break;

    case 'Position':
      data.sort((a, b) => a.position.localeCompare(b.position));
      break;

    case 'Age':
      data.sort((a, b) => a.age - b.age);
      break;

    case 'Salary':
      data.sort((a, b) => a.salary.replace(/[$,]/g, '')
        - b.salary.replace(/[$,]/g, ''));
      break;
  }

  tBody.innerHTML = '';

  for (const i in data) {
    tBody.insertAdjacentHTML('beforeend', `
      <tr>
        <td>${data[i].name}</td>
        <td>${data[i].position}</td>
        <td>${data[i].age}</td>
        <td>${data[i].salary}</td>
      </tr>
    `);
  }
});
