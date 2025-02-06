'use strict';

const table = document.querySelector('table');
const arrOfHeaders = [...table.children[0].children[0].children];
const people = [];

for (let i = 1; i < table.rows.length - 1; i++) {
  people.push({
    name: table.rows[i].cells[0].textContent,
    position: table.rows[i].cells[1].textContent,
    age: table.rows[i].cells[2].textContent,
    salary: table.rows[i].cells[3].textContent,
  });
}

arrOfHeaders.forEach((item) => {
  item.addEventListener('click', (e) => {
    const crytery = e.target.textContent.toLowerCase();

    switch (crytery) {
      case 'name':
      case 'position':
        people.sort((a, b) => {
          return a[crytery].localeCompare(b[crytery]);
        });
        break;
      case 'age':
        people.sort((a, b) => {
          return a[crytery] - b[crytery];
        });
        break;
      case 'salary':
        people.sort((a, b) => {
          return (
            a[crytery].replace('$', '').replace(',', '') -
            b[crytery].replace('$', '').replace(',', '')
          );
        });
    }

    for (let i = 0; i < people.length; i++) {
      for (let j = 0; j < table.rows[0].cells.length; j++) {
        table.rows[i + 1].cells[j].textContent =
          people[i][Object.keys(people[i])[j]];
      }
    }
  });
});
