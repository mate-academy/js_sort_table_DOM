'use strict';

const body = document.querySelector('tbody');
const people = [];

const getNumber = (string) => {
  return parseFloat(string.replace('$', ''));
};

for (let i = 0; i < body.children.length; i++) {
  people.push({
    name: body.children[i].children[0].innerText,
    position: body.children[i].children[1].innerText,
    age: body.children[i].children[2].innerText,
    salary: body.children[i].children[3].innerText,
  });
}

const sortBy = document.querySelectorAll('th');

sortBy.forEach(el => {
  el.addEventListener('click', (e) => {
    body.innerHTML = '';

    if (e.target.innerText === 'Name') {
      people.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (e.target.innerText === 'Age') {
      people.sort((a, b) => a.age - b.age);
    }

    if (e.target.innerText === 'Position') {
      people.sort((a, b) => a.position.localeCompare(b.position));
    }

    if (e.target.innerText === 'Salary') {
      people.sort((a, b) => getNumber(a.salary) - getNumber(b.salary));
    }

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
