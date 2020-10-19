'use strict';

const tbody = document.querySelector('tbody').children;
const thead = document.querySelector('thead');

const personList = [...tbody].map(person => {
  const salary = person.children[3].innerText.replace(/[$,]/g, '');

  return {
    name: person.children[0].innerText,
    position: person.children[1].innerText,
    age: Number(person.children[2].innerText),
    originSalary: person.children[3].innerText,
    salary: Number(salary),
  };
});

thead.addEventListener('click', event => {
  const sortColumn = event.target.innerText.toLowerCase();

  if (sortColumn === 'name' || sortColumn === 'position') {
    personList.sort((a, b) => a[sortColumn].localeCompare(b[sortColumn]));
  } else {
    personList.sort((a, b) => a[sortColumn] - b[sortColumn]);
  }

  for (let i = 0; i < tbody.length; i++) {
    tbody[i].children[0].innerText = personList[i].name;
    tbody[i].children[1].innerText = personList[i].position;
    tbody[i].children[2].innerText = personList[i].age;
    tbody[i].children[3].innerText = personList[i].originSalary;
  }
});
