'use strict';

const th = document.querySelectorAll('th');
const tbody = document.querySelector('tbody');
const tr = [...tbody.querySelectorAll('tr')];

th.forEach((header) => {
  header.addEventListener('click', () => {
    if (header.textContent === 'Name') {
      tr.sort((firstElement, secondElement) =>
        firstElement.cells[0].textContent
          .toLowerCase()
          // eslint-disable-next-line prettier/prettier
          .localeCompare(secondElement.cells[0].textContent.toLowerCase()));
    }

    if (header.textContent === 'Position') {
      tr.sort((firstElement, secondElement) =>
        firstElement.cells[1].textContent
          .toLowerCase()
          // eslint-disable-next-line prettier/prettier
          .localeCompare(secondElement.cells[1].textContent.toLowerCase()));
    }

    if (header.textContent === 'Age') {
      tr.sort(
        (firstElement, secondElement) =>
          +firstElement.cells[2].textContent -
          +secondElement.cells[2].textContent,
      );
    }

    if (header.textContent === 'Salary') {
      tr.sort(
        (firstElement, secondElement) =>
          parseInt(firstElement.cells[3].textContent.replace(/[$,]/g, ''), 10) -
          parseInt(secondElement.cells[3].textContent.replace(/[$,]/g, ''), 10),
      );
    }

    tbody.append(...tr);
  });
});
