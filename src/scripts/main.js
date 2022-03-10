'use strict';

const body = document.querySelector('tbody');
const person = body.querySelectorAll('tr');
const head = document.querySelector('thead');

head.addEventListener('click', (e) => {
  const order = e.target;

  if (order.textContent === 'Name') {
    const persons = [...person];

    persons.sort((a, b) =>
      ((a.children[0].textContent).localeCompare(b.children[0].textContent)));

    for (const key of persons) {
      body.append(key);
    };
  };

  if (order.textContent === 'Position') {
    const persons = [...person];

    persons.sort((a, b) =>
      ((a.children[1].textContent).localeCompare(b.children[1].textContent)));

    for (const key of persons) {
      body.append(key);
    };
  };

  if (order.textContent === 'Age') {
    const persons = [...person];

    persons.sort((a, b) =>
      (parseInt(a.children[2].textContent)
  - parseInt(b.children[2].textContent)));

    for (const key of persons) {
      body.append(key);
    };
  };

  if (order.textContent === 'Salary') {
    const persons = [...person];

    persons.sort((a, b) =>
      (parseFloat(a.children[3].textContent.slice(1))
  - parseFloat(b.children[3].textContent.slice(1))));

    for (const key of persons) {
      body.append(key);
    };
  };
});
