'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const persons = tbody.querySelectorAll('tr');

thead.addEventListener('click', (e) => {
  let sortedPersons;

  switch (e.target.textContent) {
    case 'Name':
      sortedPersons = [...persons]
        .sort((a, b) => {
          return a.children[0].textContent
            .localeCompare(b.children[0].textContent);
        });

      sortedPersons.forEach(person => tbody.append(person));
      break;
    case 'Position':
      sortedPersons = [...persons]
        .sort((a, b) => {
          return a.children[1].textContent
            .localeCompare(b.children[1].textContent);
        });

      sortedPersons.forEach(person => tbody.append(person));
      break;
    case 'Age':
      sortedPersons = [...persons]
        .sort((a, b) => {
          return +a.children[2].textContent - +b.children[2].textContent;
        });

      sortedPersons.forEach(person => tbody.append(person));
      break;
    case 'Salary':
      sortedPersons = [...persons]
        .sort((a, b) => {
          return +a.children[3].textContent.replace(',', '').slice(1)
          - +b.children[3].textContent.replace(',', '').slice(1);
        });

      sortedPersons.forEach(person => tbody.append(person));
      break;
  }
});
