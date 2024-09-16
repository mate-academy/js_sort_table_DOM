/* eslint-disable no-console */
'use strict';

const head = document.querySelector('thead');
const body = document.querySelector('tbody');

const headRows = document.querySelectorAll('th');
const bodyRows = [...body.querySelectorAll('tr')];

head.addEventListener('click', e => {
  const currentIndex = [...headRows].indexOf(e.target);

  switch (currentIndex) {
    case 0:
    case 1:
      bodyRows.sort((a, b) => {
        const name1 = a.children[currentIndex].textContent;
        const name2 = b.children[currentIndex].textContent;

        return name1.localeCompare(name2);
      });
      break;
    case 2:
      bodyRows.sort((a, b) =>
        a.children[currentIndex].textContent
        - b.children[currentIndex].textContent);

      break;

    case 3:
      bodyRows.sort((a, b) => {
        const num1 = a.children[currentIndex]
          .textContent.replace(/[^0-9]/g, '');
        const num2 = b.children[currentIndex]
          .textContent.replace(/[^0-9]/g, '');

        return num1 - num2;
      });

      break;

    default:
      break;
  }

  bodyRows.forEach(el => {
    body.append(el);
  });
});
