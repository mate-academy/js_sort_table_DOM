'use strict';

const heading = document.querySelector('thead');
const table = [...document.querySelectorAll('tbody tr')];

heading.addEventListener('click', (event) => {
  if (event.target.textContent === 'Name') {
    table.sort((a, b) => a.children[0]
      .innerText.localeCompare(b.children[0].innerText));

    for (const a of table) {
      document.querySelector('tbody').append(a);
    }
  }

  if (event.target.textContent === 'Position') {
    table.sort((a, b) => a.children[1]
      .innerText.localeCompare(b.children[1].innerText));

    for (const a of table) {
      document.querySelector('tbody').append(a);
    }
  }

  if (event.target.textContent === 'Age') {
    table.sort((a, b) => a.children[2]
      .innerText - b.children[2].innerText);

    for (const a of table) {
      document.querySelector('tbody').append(a);
    }
  }

  if (event.target.textContent === 'Salary') {
    table.sort((a, b) => a.children[3]
      .innerText.substring(1).replace(',', '')
          - b.children[3].innerText.substring(1).replace(',', ''));

    for (const a of table) {
      document.querySelector('tbody').append(a);
    }
  }
});
