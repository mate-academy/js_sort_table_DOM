'use strict';

const tBody = document.querySelector('tbody');
const arraySpecialists = [...tBody.children];
const elementsTotal = document.querySelectorAll('th');

for (let i = 0; i < elementsTotal.length; i++) {
  elementsTotal[i].id = [i];
}

const sortTable = (e) => {
  arraySpecialists.sort((a, b) => {
    const itemA = a.cells[e.target.id].innerText;
    const itemB = b.cells[e.target.id].innerText;

    switch (e.target.innerText) {
      case 'Name':
      case 'Position':
        return itemA.localeCompare(itemB);
      case 'Age':
        return itemA - itemB;
      case 'Salary':
        return parseInt(itemA.slice(1))
        - parseInt(itemB.slice(1));
    }
  });

  return tBody.append(...arraySpecialists);
};

for (const element of elementsTotal) {
  element.addEventListener('click', sortTable);
}
