'use strict';

const employees = [...document.querySelectorAll('tbody > tr')];

const sortingParams = [...document.querySelectorAll('thead > tr > th')];
const tbody = document.querySelector('tbody');

const sortingFn = (sortBy, dataToSort) => {
  switch (sortBy) {
    case 'Name':
      dataToSort.sort((emplA, emplB) => {
        const nameA = emplA.cells[0].innerText.toLowerCase();
        const nameB = emplB.cells[0].innerText.toLowerCase();

        return nameA.localeCompare(nameB);
      });

      break;
    case 'Position':
      dataToSort.sort((emplA, emplB) => {
        const positionA = emplA.cells[1].innerText.toLowerCase();
        const positionB = emplB.cells[1].innerText.toLowerCase();

        return positionA.localeCompare(positionB);
      });

      break;

    case 'Age':
      dataToSort.sort((emplA, emplB) => {
        const firstEmplAge = emplA.cells[2].innerText;
        const secondEmplAge = emplB.cells[2].innerText;

        return Number(firstEmplAge) - Number(secondEmplAge);
      });

      break;

    case 'Salary':
      dataToSort.sort((emplA, emplB) => {
        const emplASalary = emplA.cells[3].innerText.slice(1).replace(',', '');
        const emplBSalary = emplB.cells[3].innerText.slice(1).replace(',', '');

        return Number(emplASalary) - Number(emplBSalary);
      });

      break;

    default:
      break;
  }

  return dataToSort;
};

sortingParams.forEach((header) => {
  // eslint-disable-next-line no-shadow
  header.addEventListener('click', (event) => {
    tbody.innerHTML = '';

    const fragment = document.createDocumentFragment();
    const sorted = sortingFn(event.currentTarget.innerText, employees);

    sorted.forEach((row) => {
      fragment.append(row);
    });

    tbody.appendChild(fragment);
  });
});
