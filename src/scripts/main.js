'use strict';

const tr = [...document.querySelectorAll('tbody tr')];
const thead = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const indexHead = [...thead.children].indexOf(event.target);
  const findSorting = tr[indexHead].children[indexHead];

  if (findSorting.textContent[0] === '$'
    || !isNaN(parseFloat(findSorting.textContent))) {
    const sorted = [...tr].sort((curr, next) => {
      return replacementSigns(curr.children[indexHead].textContent)
        - replacementSigns(next.children[indexHead].textContent);
    });

    tbody.append(...sorted);
  } else {
    const sorted = [...tr].sort((curr, next) => {
      return curr.children[indexHead].textContent
        .localeCompare(next.children[indexHead].textContent);
    });

    tbody.append(...sorted);
  }

  function replacementSigns(string) {
    return string.replace('$', '').replace(',', '');
  }
});
