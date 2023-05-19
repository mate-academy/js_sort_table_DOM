'use strict';

const table = document.querySelector('table');
const tableRows = table.querySelectorAll('tr');
const people = [...tableRows].slice(1, -1);

table.firstElementChild.addEventListener('click', (e) => {
  people.sort((personA, personB) => {
    switch (e.target.innerText) {
      case 'Name':
        const nameA = personA.children[0].innerText;
        const nameB = personB.children[0].innerText;

        return nameA.localeCompare(nameB);

      case 'Position':
        const positionA = personA.children[1].innerText;
        const positionB = personB.children[1].innerText;

        return positionA.localeCompare(positionB);

      case 'Age':
        const ageA = personA.children[2].innerText;
        const ageB = personB.children[2].innerText;

        return Number(ageA) - Number(ageB);

      case 'Salary':
        const salaryA = personA.children[3].innerText;
        const salaryB = personB.children[3].innerText;

        return extractDigits(salaryA) - extractDigits(salaryB);

      default:
        throw new Error(`Unknown table header: ${e.target.innerText}`);
    }
  });

  table.append(...people);
});

function extractDigits(string) {
  return Number(string.replace(/\D/g, ''));
}
