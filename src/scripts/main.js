'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const listSalary = document.querySelector('tbody').children;

const TRIGERNAME_SALARY = { name: 'Salary', index: 3 };
const TRIGERNAME_AGE = { name: 'Age', index: 2 };
const TRIGERNAME_POSITION = { name: 'Position', index: 1 };
const TRIGERNAME_NAME = { name: 'Name', index: 0 };

thead.addEventListener('click', (e) => {
  const targetName = e.target.textContent;

  switch (targetName) {
    case TRIGERNAME_SALARY.name:
      refreshList(TRIGERNAME_SALARY.index);

      break;
    case TRIGERNAME_AGE.name:
      refreshList(TRIGERNAME_AGE.index);

      break;
    case TRIGERNAME_POSITION.name:
      refreshList(TRIGERNAME_POSITION.index);

      break;
    case TRIGERNAME_NAME.name:
      refreshList(TRIGERNAME_NAME.index);

      break;
  }
});

function refreshList(indx) {
  const sortedAgeList = sortList(listSalary, indx);

  tbody.innerHTML = '';

  sortedAgeList.forEach((elm) => {
    tbody.appendChild(elm);
  });
}

function sortList(colect, indx) {
  const out = Array.from(colect).sort((a, b) => {
    if (!isNaN(cleanCurrency(a.children[indx].textContent))) {
      return (
        cleanCurrency(b.children[indx].textContent) -
        cleanCurrency(a.children[indx].textContent)
      );
    }

    return a.children[indx].textContent.localeCompare(
      b.children[indx].textContent,
    );
  });

  return out;
}

function cleanCurrency(input) {
  return +input.replace(/[$,]/g, '');
}
