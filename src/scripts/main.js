'use strict';
// 423

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const people = tbody.querySelectorAll('tr');

thead.addEventListener('click', (e) => {
  let sortedPeople;

  switch (e.target.textContent) {
    case 'Name':
      sortedPeople = [...people]
        .sort((a, b) => {
          return a.children[0].textContent
            .localeCompare(b.children[0].textContent);
        });

      break;
    case 'Position':
      sortedPeople = [...people]
        .sort((a, b) => {
          return a.children[1].textContent
            .localeCompare(b.children[1].textContent);
        });

      break;
    case 'Age':
      sortedPeople = [...people]
        .sort((a, b) => {
          return a.children[2].textContent
            .localeCompare(b.children[2].textContent);
        });

      break;
    case 'Salary':
      sortedPeople = [...people]
        .sort((a, b) => {
          return a.children[3].textContent
            .localeCompare(b.children[3].textContent);
        });

      break;
  }
  sortedPeople.forEach(person => tbody.append(person));
});
