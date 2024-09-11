'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const listSalary = document.querySelector('tbody').children;

const TITLES = {
  Salary: 3,
  Age: 2,
  Position: 1,
  Name: 0,
};

thead.addEventListener('click', (e) => {
  const targetName = e.target.textContent;

  refreshList(targetName);
});

function refreshList(triger) {
  const sortedAgeList = sortList(listSalary, TITLES[triger]);

  tbody.innerHTML = '';

  sortedAgeList.forEach((elm) => {
    tbody.appendChild(elm);
  });
}

function sortList(colect, indx) {
  const out = Array.from(colect).sort((a, b) => {
    if (!isNaN(cleanCurrency(a.children[indx].textContent))) {
      return (
        cleanCurrency(a.children[indx].textContent) -
        cleanCurrency(b.children[indx].textContent)
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
