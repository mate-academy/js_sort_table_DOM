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
  if (string === 'Name') {
    return (a, b) => a.name.localeCompare(b.name);
  }

  if (string === 'Age') {
    return (a, b) => a.age - b.age;
  }

  if (string === 'Position') {
    return (a, b) => a.position.localeCompare(b.position);
  }

  if (string === 'Salary') {
    return (a, b) => getNumber(a.salary) - getNumber(b.salary);
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
