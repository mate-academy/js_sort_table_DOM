'use strict';

const clickable = document.getElementsByTagName('thead')[0]
  .children[0].children;

for (let i = 0; i < clickable.length; i++) {
  clickable[i].addEventListener('click', () => {
    sort();
  });
}

function sort() {
  // const trs1 = document.getElementsByTagName('tr');
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

  const sorted = people.sort((a, b) => parseInt(a.salary)
    - parseInt(b.salary));

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
