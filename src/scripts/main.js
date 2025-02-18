'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const nameClick = e.target.innerText;
  const fields = [...tbody.querySelectorAll('tr')];
  const names = ['Name', 'Position', 'Age', 'Salary'];
  const indexName = names.indexOf(nameClick);

  fields.sort((elem1, elem2) => {
    let td1 = elem1.querySelectorAll('td')[indexName].innerHTML;
    let td2 = elem2.querySelectorAll('td')[indexName].innerHTML;

    if (nameClick === 'Name' || nameClick === 'Position') {
      return td1.localeCompare(td2);
    }

    if (nameClick === 'Age') {
      return parseInt(td1) - parseInt(td2);
    }

    if (nameClick === 'Salary') {
      td1 = parseInt(td1.replace('$', '').replace(',', ''));
      td2 = parseInt(td2.replace('$', '').replace(',', ''));

      return td1 - td2;
    }
  });

  fields.forEach((field) => tbody.appendChild(field));
});
