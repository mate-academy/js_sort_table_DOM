'use strict';

// write code here
const table = document.querySelector('table');

const initiPeople = () => {
  const rows = [...table.children[1].children];
  const peopleInit = [];

  rows.forEach(row => {
    const person = {
      name: '',
      position: '',
      age: 0,
      salary: 0,
    };

    const values
      = row.textContent.trim().split('\n').map(value => value.trim());

    let i = 0;

    for (const key of Object.keys(person)) {
      if (key === 'salary') {
        person[key] = values[i].slice(1).replaceAll(',', '');

        continue;
      }

      if (values[i] !== undefined) {
        person[key] = values[i];

        i++;
      }
    }

    peopleInit.push(person);
  });

  return peopleInit;
};

const people = initiPeople();

const render = () => {
  table.children[1].innerHTML = `
    <tbody>
      ${people.map(person => (
    `<tr>
          <td>${person.name}</td>
          <td>${person.position}</td>
          <td>${person.age}</td>
          <td>$${Number(person.salary).toLocaleString('en-US')}</td>
        </tr>`
  )).join('')}
    </tbody>`;
};

table.addEventListener('click', e => {
  const sortBtn = e.target.closest('th');

  if (sortBtn) {
    const filterKey
      = sortBtn.textContent[0].toLowerCase() + sortBtn.textContent.slice(1);

    people.sort((personFirst, personSecond) => {
      if (filterKey === 'name' || filterKey === 'position') {
        return personFirst[filterKey].localeCompare(personSecond[filterKey]);
      }

      return personFirst[filterKey] - personSecond[filterKey];
    });

    render();
  }
});
