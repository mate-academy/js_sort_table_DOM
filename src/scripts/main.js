'use strict';

// write code here
const head = document.querySelector('thead');
const body = document.querySelector('tbody');

const headerRows = head.querySelectorAll('th');
const bodyRows = [...body.querySelectorAll('tr')];

head.addEventListener('click', (e) => {
  const searchIndex = [...headerRows].indexOf(e.target);

  switch (searchIndex) {
    case 0:
    case 1:
      bodyRows.sort((a, b) => {
        const text1 = a.children[searchIndex].textContent;
        const text2 = b.children[searchIndex].textContent;

        return text1.localeCompare(text2);
      });
      break;

    case 2:
    case 3:
      bodyRows.sort((a, b) => {
        const number1 = a.children[searchIndex].textContent
          .replace('$', '').replace(',', '');
        const number2 = b.children[searchIndex].textContent
          .replace('$', '').replace(',', '');

        return number1 - number2;
      });
      break;
  };

  bodyRows.forEach(element => {
    body.append(element);
  });
});
