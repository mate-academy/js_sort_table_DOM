'use strict';

const tHead = document.querySelector('tHead');
const tBody = document.querySelector('tbody');
const table = document.querySelector('tbody').children;
const arr = [];

for (const i of table) {
  arr.push({
    name: i.children[0],
    position: i.children[1],
    age: i.children[2],
    salary: i.children[3],
  });
}

tHead.addEventListener('click', e => {
  if (e.target.textContent === 'Name') {
    arr.sort((a, b) => a.name.textContent.localeCompare(b.name.textContent));
  }

  if (e.target.textContent === 'Position') {
    arr.sort((a, b) =>
      a.position.textContent.localeCompare(b.position.textContent));
  }

  if (e.target.textContent === 'Age') {
    arr.sort((a, b) => a.age.textContent - b.age.textContent);
  }

  if (e.target.textContent === 'Salary') {
    arr.sort((a, b) => a.salary.textContent.replace(/[$,]/g, '')
      - b.salary.textContent.replace(/[$,]/g, ''));
  }

  tBody.innerHTML = '';

  for (const i of arr) {
    tBody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${i.name.textContent}</td>
      <td>${i.position.textContent}</td>
      <td>${i.age.textContent}</td>
      <td>${i.salary.textContent}</td>
    </tr>
    `);
  }
});
