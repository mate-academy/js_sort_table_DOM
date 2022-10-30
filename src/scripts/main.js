'use strict';

const employeeList = [...document.querySelectorAll('tr')].slice(1, -1);
const tableBody = document.querySelector('tbody');
const menu = document.querySelector('thead');

menu.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const th = e.target;

  sortColumn(th.cellIndex);
});

function sortColumn(colNumber) {
  let sortingType;

  switch (colNumber) {
    case 0:
    case 1:
      sortingType = (a, b) => (a.children[colNumber].innerText
        .localeCompare(b.children[colNumber].innerText));
      break;

    case 2:
      sortingType = (a, b) => (+a.children[colNumber].innerText)
       - (+b.children[colNumber].innerText);
      break;

    case 3:
      sortingType = (a, b) => (+a.children[colNumber].innerText
        .slice(1).split(',').join('')) - (+b.children[colNumber]
        .innerText.slice(1).split(',').join(''));
      break;
  }

  employeeList.sort(sortingType);

  tableBody.append(...employeeList);
}
