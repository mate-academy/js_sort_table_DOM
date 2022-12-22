'use strict';

const body = document.querySelector('tbody');
const people = [];

const getNumber = (string) => {
  return parseFloat(string.replace('$', ''));
};

for (let i = 0; i < body.children.length; i++) {
  const [ namePerson, position, age, salary ] = body.children[i].children;

  people.push({
    name: namePerson.innerText,
    position: position.innerText,
    age: age.innerText,
    salary: salary.innerText,
  });
}

const functionFoSort = (string) => {
  if (string === 'Name' || string === 'Position') {
    return (a, b) => a[string.toLowerCase()]
      .localeCompare(b[[string.toLowerCase()]]);
  }

  if (string === 'Age' || string === 'Salary') {
    return (a, b) =>
      getNumber(a[string.toLowerCase()]) - getNumber(b[string.toLowerCase()]);
  }
};

const sortBy = document.querySelectorAll('th');

sortBy.forEach(el => {
  el.addEventListener('click', (e) => {
    body.innerHTML = '';
    people.sort(functionFoSort(e.target.innerText));

    people.forEach(q => {
      body.insertAdjacentHTML('beforeend',
        `<tr>
            <td>${q.name}</td>
            <td>${q.position}</td>
            <td>${q.age}</td>
            <td>${q.salary}</td>
          </tr>`);
    });
  });
});
