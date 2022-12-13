'use strict';

const tbody = document.body.querySelector('tbody');
const tbodyChildrens = [...document.querySelector('tbody').children];
const navListElements = [...document.body.querySelector('tr').children];

for (const element of navListElements) {
  element.addEventListener('click', (action) => {
    const getTextContent = (item) => {
      return item.textContent;
    };

    if (action.target === navListElements[0]) {
      const sortedNames = tbodyChildrens.sort(
        (a, b) => getTextContent(a.children[0]).localeCompare(
          getTextContent(b.children[0])));

      tbody.append(...sortedNames);
    }

    if (action.target === navListElements[1]) {
      const sortedPosition = tbodyChildrens.sort(
        (a, b) => getTextContent(a.children[1]).localeCompare(
          getTextContent(b.children[1])));

      tbody.append(...sortedPosition);
    }

    if (action.target === navListElements[2]) {
      const sortedAge = tbodyChildrens.sort(
        (a, b) => +a.children[2].textContent - +b.children[2].textContent);

      tbody.append(...sortedAge);
    }

    if (action.target === navListElements[3]) {
      const makeNumber = (string) => {
        return +string.slice(1).split(',').join('');
      };

      const sortedSalary = tbodyChildrens.sort(
        (a, b) => (makeNumber(a.children[3].textContent))
            - (makeNumber(b.children[3].textContent)));

      tbody.append(...sortedSalary);
    }
  });
}
