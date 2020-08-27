'use strict';

const tr = [...document.querySelectorAll('tbody tr')];
const thead = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (event) => {
  const indexHead = [...thead.children].indexOf(event.target);
  let findSorting = tr[indexHead].children[indexHead];

  if (findSorting.textContent[0] === '$'
    || !isNaN(parseFloat(findSorting.textContent))) {

    const sorted = [...tr].sort((a, b) => {
      return replacementSigns(a.children[indexHead].textContent)
        - replacementSigns(b.children[indexHead].textContent);
    });

    tbody.append(...sorted);
  } else {
    const sorted = [...tr].sort((a, b) => {
      return a.children[indexHead].textContent
        .localeCompare(b.children[indexHead].textContent);
    });

    tbody.append(...sorted);
  }

  function replacementSigns(string) {
    return string.replace('$', '').replace(',', '');
  }
});
