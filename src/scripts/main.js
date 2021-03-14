'use strict';

const table = document.querySelector(`table`);
const tableBody = document.querySelector(`tbody`);
const people = tableBody.querySelectorAll(`tr`);

table.addEventListener(`click`, () => {
  const peopleArray = [...people];

  switch (event.target.textContent) {
    case 'Name': {
      peopleArray.sort((a, b) => {
        const nameA = a.children[0].textContent;
        const nameB = b.children[0].textContent;

        return nameA.localeCompare(nameB);
      });

      break;
    }

    case 'Position': {
      peopleArray.sort((a, b) => {
        const positionA = a.children[1].textContent;
        const positionB = b.children[1].textContent;

        return positionA.localeCompare(positionB);
      });

      break;
    }

    case 'Age': {
      peopleArray.sort((a, b) => {
        const ageA = a.children[2].textContent;
        const ageB = b.children[2].textContent;

        return Number(ageA) - Number(ageB);
      });

      break;
    }

    case 'Salary': {
      peopleArray.sort((a, b) => {
        const sallaryA = a.children[3].textContent.replace(/[$,]/g, '');
        const sallaryB = b.children[3].textContent.replace(/[$,]/g, '');

        return Number(sallaryA) - Number(sallaryB);
      });

      break;
    }
  }

  for (const element of peopleArray) {
    tableBody.append(element);
  }
});
