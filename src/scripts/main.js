'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const persons = tbody.querySelectorAll('tr');

thead.addEventListener('click', function(e) {
  let sortPersons;

  switch (e.target.textContent) {
    case 'Name':
      sortPersons = [...persons].sort((a, b) => {
        return a.children[0].textContent
          .localeCompare(b.children[0].textContent);
      });

      sortPersons.forEach(person => tbody.append(person));
      break;

    case 'Position':
      sortPersons = [...persons].sort((a, b) => {
        return a.children[1].textContent
          .localeCompare(b.children[1].textContent);
      });

      sortPersons.forEach(person => tbody.append(person));
      break;

    case 'Age':
      sortPersons = [...persons].sort((a, b) => {
        return Number(a.children[2].textContent)
        - Number(b.children[2].textContent);
      });

      sortPersons.forEach(person => tbody.append(person));
      break;

    case 'Salary':
      sortPersons = [...persons].sort((a, b) => {
        return Number(a.children[3].textContent.replace(',', '').slice(1))
        - Number(b.children[3].textContent.replace(',', '').slice(1));
      });

      sortPersons.forEach(person => tbody.append(person));
      break;
  }
});
