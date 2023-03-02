'use strict';

const tBody = document.querySelector('tbody');
const arraySpecialists = [...tBody.children];
const elementsTotal = document.querySelectorAll('th');

for (let i = 0; i < elementsTotal.length; i++) {
  elementsTotal[i].id = [i];
}

const SortTable = (e) => {
  arraySpecialists.sort((a, b) => {
    const itemA = a.cells[e.target.id].innerText;
    const itemB = b.cells[e.target.id].innerText;

    switch (e.target.innerText) {
      case 'Name':
        return itemA.localeCompare(itemB);
      case 'Position':
        return itemA.localeCompare(itemB);
      case 'Age':
        return itemA - itemB;
      case 'Salary':
        return itemA.slice(1).split(',').join('')
          - itemB.slice(1).split(',').join('');
    }
  });

  return tBody.append(...arraySpecialists);
};

for (const element of elementsTotal) {
  element.addEventListener('click', SortTable);
}
