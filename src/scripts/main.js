'use strict';

const tbody = document.body.querySelector('tbody');
const tbodyChildrens = [...document.querySelector('tbody').children];
const navListElements = [...document.body.querySelector('tr').children];

for (const element of navListElements) {
  element.addEventListener('click', (action) => {
    const getTextContent = (item) => {
      return item.textContent;
    };

    let sortedRows = null;

    switch (action.target) {
      case navListElements[0]:
        sortedRows = tbodyChildrens.sort(
          (a, b) => getTextContent(a.children[0]).localeCompare(
            getTextContent(b.children[0])));
        break;

      case navListElements[1]:
        sortedRows = tbodyChildrens.sort(
          (a, b) => getTextContent(a.children[1]).localeCompare(
            getTextContent(b.children[1])));
        break;

      case navListElements[2]:
        sortedRows = tbodyChildrens.sort(
          (a, b) => +a.children[2].textContent - +b.children[2].textContent);
        break;

      default:
        const makeNumber = (string) => {
          return +string.slice(1).split(',').join('');
        };

        sortedRows = tbodyChildrens.sort(
          (a, b) => (makeNumber(a.children[3].textContent))
              - (makeNumber(b.children[3].textContent)));
    }

    tbody.append(...sortedRows);
  });
}
