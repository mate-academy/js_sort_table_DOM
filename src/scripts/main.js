'use strict';

const rowOfTitles = document.querySelector('thead');
const rows = document.querySelectorAll('tbody tr');
const bodyOfTable = document.querySelector('tbody');

rowOfTitles.addEventListener('click', event => {
  const indexOfElement = event.target.cellIndex;
  const copyRows = [...rows];

  copyRows.sort((a, b) => {
    let firstItem = a.children[indexOfElement].textContent;
    let secondItem = b.children[indexOfElement].textContent;

    if (firstItem.includes('$')) {
      const regexp = new RegExp(/[^0-9]/g);

      firstItem = firstItem.replace(regexp, '');
      secondItem = secondItem.replace(regexp, '');
    }

    return isNaN(firstItem)
      ? firstItem.localeCompare(secondItem)
      : firstItem - secondItem;
  });

  bodyOfTable.append(...copyRows);
});
