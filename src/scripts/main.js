'use strict';

const tableBody = document.querySelector('tbody');
let persons = [...document.querySelector('tbody').querySelectorAll('tr')];

function getPersonTable(person) {
  return `
  ${person.map(personEl => `
    <tr>
        <td>${personEl.children[0].innerText}</td>
        <td>${personEl.children[1].innerText}</td>
        <td>${personEl.children[2].innerText}</td>
        <td>${personEl.children[3].innerText}</td>
      </tr>
  `).join('')}
`;
}

function getSalery(el) {
  return +el.innerText.slice(1).split(',').join('')
}

document.querySelector('thead').addEventListener('click', (e) => {
  persons = persons.sort((a, b) => {
    switch (e.target.innerText) {
      case 'Name':
        return a.children[0].innerText.localeCompare(b.children[0].innerText);

      case 'Position':
        return a.children[1].innerText.localeCompare(b.children[1].innerText);

      case 'Age':
        return +a.children[2].innerText - +b.children[2].innerText;

      case 'Salary':
        return getSalery(a.children[3]) - getSalery(b.children[3]);
    }
  });

  tableBody.innerHTML = getPersonTable(persons);
});
