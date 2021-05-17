'use strict';

const thead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const tableRow = [...tableBody.querySelectorAll('tr')];

const filterStr = (str) => str.replace(/[^a-zA-Z0-9]/g, '');

thead.addEventListener('click', e => {
  const index = [...thead.children[0].children].indexOf(e.target);

  tableRow.sort((a, b) => {
    const valueA = a.children[index].textContent;
    const valueB = b.children[index].textContent;

    return isFinite(filterStr(valueA))
      ? filterStr(valueA) - filterStr(valueB)
      : valueA.localeCompare(valueB);
  });

  tableBody.append(...tableRow);
});
