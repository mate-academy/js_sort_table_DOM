'use strict';

let currentKey = '';

document.addEventListener('click', e => {
  const heading = e.target.closest('thead th');

  if (!heading) {
    return;
  }

  const key = heading.textContent.toLowerCase();
  const isCountable = key === 'age' || key === 'salary';

  const people = [...document.querySelectorAll('tbody tr')]
    .map(person => {
      const [personName, position, age, salary] = [...person.children];

      return {
        name: personName.textContent,
        position: position.textContent,
        age: Number(age.textContent),
        salary: Number(salary.textContent.replace('$', '').replace(',', '')),
      };
    })
    .sort((a, b) => {
      if (isCountable) {
        if (currentKey !== key) {
          return a[key] - b[key];
        }

        return b[key] - a[key];
      }

      if (currentKey !== key) {
        return a[key].localeCompare(b[key]);
      }

      return b[key].localeCompare(a[key]);
    });

  currentKey !== key ? currentKey = key : currentKey = '';

  const tbody = document.querySelector('tbody');

  [...tbody.children].forEach(el => el.remove());

  people.map(person => {
    const tr = document.createElement('tr');

    person.salary = `$${person.salary.toLocaleString('en-US')}`;

    Object.values(person).forEach(value => {
      const td = document.createElement('td');

      td.textContent = value;
      tr.append(td);
    });

    tbody.append(tr);
  });
});
