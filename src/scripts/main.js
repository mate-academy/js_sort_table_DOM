'use strict';

const people = Array.from(document.querySelectorAll('tbody tr'));
const categories = document.querySelector('thead');
const table = document.querySelector('tbody');

categories.addEventListener('click', (event) => {
  const column = event.target.cellIndex;
  const sortTable = people.sort((a, b) => {
    const first = a.children[column].innerHTML;
    const second = b.children[column].innerHTML;

    if (column === 2) {
      return first - second;
    } else if (column === 3) {
      return ((
        +first.replace('$', '').replace(',', '.')
      ) - (
        +second.replace('$', '').replace(',', '.')
      ));
    } else {
      return first.localeCompare(second);
    }
  });

  table.append(...sortTable);
});
