'use strict';

const table = document.querySelector('table');
const theadList = table.querySelector('thead').querySelector('tr');
const tbody = table.querySelector('tbody');

function parseIntFromString(value) {
  return parseInt(value.replaceAll('$', '').replaceAll(',', ''));
}

function sortByColumnIndex(index) {
  const sorted = Array.from(tbody.children).sort((child1, child2) => {
    const value1 = child1.children[index].textContent;
    const value2 = child2.children[index].textContent;

    if (!isNaN(parseIntFromString(value1))) {
      return parseIntFromString(value1) - parseIntFromString(value2);
    }

    return child1.children[index].textContent.localeCompare(
      child2.children[index].textContent,
    );
  });

  tbody.replaceChildren(...sorted);
}

theadList.addEventListener('click', (e) => {
  sortByColumnIndex(Array.from(theadList.children).indexOf(e.target));
});
