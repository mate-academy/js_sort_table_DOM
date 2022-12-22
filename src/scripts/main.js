'use strict';

const body = document.querySelector('tbody');
const people = [];

const getNumber = (string) => {
  return parseFloat(string.replace('$', '').replace(',', '.'));
};

for (let i = 0; i < body.children.length; i++) {
  const [ namePerson, position, age, salary ] = body.children[i].children;

  people.push({
    name: namePerson.innerText,
    position: position.innerText,
    age: age.innerText,
    salary: getNumber(salary.innerText),
  });
}

const functionFoSort = (sortKey) => {
  if (sortKey === 'name' || sortKey === 'position') {
    return (a, b) => a[sortKey].localeCompare(b[[sortKey]]);
  }

  if (sortKey === 'age' || sortKey === 'salary') {
    return (a, b) => a[sortKey] - b[sortKey];
  }
};

const sortBy = document.querySelectorAll('th');

sortBy.forEach(el => {
  el.addEventListener('click', (e) => {
    body.innerHTML = '';
    people.sort(functionFoSort(e.target.innerText.toLowerCase()));

    people.forEach(person => {
      body.insertAdjacentHTML('beforeend',
        `<tr>
            <td>${person.name}</td>
            <td>${person.position}</td>
            <td>${person.age}</td>
            <td>$${person.salary.toFixed(3)}</td>
        </tr>`);
    });
  });
});
