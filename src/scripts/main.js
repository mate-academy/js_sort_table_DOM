'use strict';

const headerTitles = document.querySelector('thead');
const sortDirections = {
  0: 'asc',
  1: 'asc',
  2: 'asc',
  3: 'asc',
};

headerTitles.addEventListener('click', (e) => {
  const param = e.target;

  if (!param.closest('th')) {
    return;
  }

  const headerChild = document.querySelector('thead tr').children;
  const rows = [...document.querySelectorAll('tbody tr')];

  rows.sort((r1, r2) => {
    switch (param) {
      case headerChild[0]:
        if (sortDirections[0] === 'asc') {
          return r1.children[0].textContent.localeCompare(
            r2.children[0].textContent,
          );
        }
        break;
      case headerChild[1]:
        if (sortDirections[1] === 'asc') {
          return r1.children[1].textContent.localeCompare(
            r2.children[1].textContent,
          );
        }
        break;
      case headerChild[2]:
        const age1 = +r1.children[2].textContent;
        const age2 = +r2.children[2].textContent;

        if (sortDirections[2] === 'asc') {
          return age1 - age2;
        }
        break;

      case headerChild[3]:
        const sal1 = +r1.children[3].textContent
          .replace('$', '')
          .replace(',', '');
        const sal2 = +r2.children[3].textContent
          .replace('$', '')
          .replace(',', '');

        if (sortDirections[3] === 'asc') {
          return sal1 - sal2;
        }
        break;
    }
  });

  const tbody = document.querySelector('tbody');

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.append(row));
});
