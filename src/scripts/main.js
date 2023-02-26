'use strict';

const tBody = document.querySelector('tbody');
const arraySpecialists = [...tBody.children];
const elementsTotal = document.querySelectorAll('th');

for (const element of elementsTotal) {
  switch (element.innerText) {
    case 'Name':
      element.addEventListener('click', (e) => {
        arraySpecialists.sort((a, b) => {
          const itemA = a.cells[0].innerText;
          const itemB = b.cells[0].innerText;

          return itemA.localeCompare(itemB);
        });

        return tBody.append(...arraySpecialists);
      });
      break;
    case 'Position':
      element.addEventListener('click', (e) => {
        arraySpecialists.sort((a, b) => {
          const itemA = a.cells[1].innerText;
          const itemB = b.cells[1].innerText;

          return itemA.localeCompare(itemB);
        });

        return tBody.append(...arraySpecialists);
      });
      break;

    case 'Age':
      element.addEventListener('click', (e) => {
        arraySpecialists.sort((a, b) => {
          const itemA = a.cells[2].innerText;
          const itemB = b.cells[2].innerText;

          return itemA - itemB;
        });

        return tBody.append(...arraySpecialists);
      });
      break;

    case 'Salary':
      element.addEventListener('click', (e) => {
        arraySpecialists.sort((a, b) => {
          const itemA = a.cells[3].innerText;
          const itemB = b.cells[3].innerText;

          return itemA.slice(1).split(',').join('')
          - itemB.slice(1).split(',').join('');
        });

        return tBody.append(...arraySpecialists);
      });
      break;
  }
}
