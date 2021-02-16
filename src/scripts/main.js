'use strict';

const heading = document.querySelector('table thead tr');
const tableBody = document.querySelector('table tbody');

const sortNumbers = (toBeSorted, index) => {
  const sorted = [...toBeSorted];

  sorted.sort((one, two) => {
    return one.children[index].textContent.replace(/\D/g, '')
    - two.children[index].textContent.replace(/\D/g, '');
  });

  tableBody.append(...sorted);
};

const sortText = (toBeSorted, index) => {
  const sorted = [...toBeSorted];

  sorted.sort((one, two) => {
    if (one.children[index].textContent > two.children[index].textContent) {
      return 1;
    };

    if (one.children[index].textContent < two.children[index].textContent) {
      return -1;
    };

    return 0;
  });

  tableBody.append(...sorted);
};

heading.addEventListener('click', (eventX) => {
  const index = [...heading.children].indexOf(eventX.target);
  const tableRows = tableBody.querySelectorAll('tr');
  const cell = tableRows[0].children[index].textContent.replace(/\D/g, '');

  if (cell === '') {
    sortText(tableRows, index);
  }

  if (cell !== '') {
    sortNumbers(tableRows, index);
  }
});
