'use strict';

const trs = [...document.querySelectorAll('tbody tr')];
const thead = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const indexHead = [...thead.children].indexOf(event.target);
  const findSorting = trs[indexHead].children[indexHead];

  if (
    findSorting.textContent[0] === '$'
    || !isNaN(parseFloat(findSorting.textContent))
  ) {
    const sortedNumber = [...trs].sort((curr, next) => {
      return replacementSigns(curr.children[indexHead].textContent)
        - replacementSigns(next.children[indexHead].textContent);
    });

    tbody.append(...sortedNumber);
  } else {
    const sortedNumber = [...trs].sort((curr, next) => {
      return curr.children[indexHead].textContent
        .localeCompare(next.children[indexHead].textContent);
    });

    tbody.append(...sortedNumber);
  }

  function replacementSigns(normalizeString) {
    return normalizeString.replace('$', '').replace(',', '');
  }
});
