'use strict';

const tableHead = document.querySelector('thead').children[0];
const tableBody = document.querySelector('tbody');
const arrayOfPeople = [...tableBody.children];
const data = [];

arrayOfPeople.forEach(person => {
  data.push({
    name: person.children[0].innerText,
    position: person.children[1].innerText,
    age: person.children[2].innerText,
    salary: converter(person.children[3].innerText),
  });
});

function converter(element) {
  return +element.slice(1).split(',').join('');
}

tableHead.addEventListener('click', e => {
  const sortCondition = e.target.innerText.toLowerCase();

  data.sort((p1, p2) => {
    if (Number(p1[`${sortCondition}`])) {
      return p1[`${sortCondition}`] - p2[`${sortCondition}`];
    }

    return p1[`${sortCondition}`].localeCompare(p2[`${sortCondition}`]);
  });

  tableBody.innerHTML = '';

  data.forEach(person => {
    tableBody.insertAdjacentHTML('beforeend', `
    <tr>
      <td>${person.name}</td>
      <td>${person.position}</td>
      <td>${person.age}</td>
      <td>$${person.salary.toLocaleString('en-US')}</td>
    </tr>
  `);
  });
});
