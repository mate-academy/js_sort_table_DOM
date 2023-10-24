'use strict';

const SORT_BY_NAME = 'Name';
const SORT_BY_POSITION = 'Position';
const SORT_BY_AGE = 'Age';
const SORT_BY_SALARY = 'Salary';

document.querySelector('table').addEventListener('click', e => {
  if (e.target.nodeName !== 'TH') {
    return;
  };

  const theadElements = [
    ...document.querySelector('thead').firstElementChild.children
  ];

  const tbody = document.querySelector('tbody');
  const tbodyElements = [...tbody.children];
  const value = e.target.textContent;

  const tbodyElemSort = sortBy(tbodyElements, theadElements, value);
  const tbodySort = document.createElement('tbody');

  for (const el of tbodyElemSort) {
    tbodySort.append(el);
  }

  tbody.replaceWith(tbodySort);
});

function salaryToNumber(salary) {
  return +salary.slice(1).split(',').join('');
}

function sortBy(tbEl, thEl, value) {
  for (let i = 0; i < thEl.length; i++) {
    if (thEl[i].textContent !== value) {
      continue;
    }

    tbEl.sort((a, b) => {
      switch (value) {
        case SORT_BY_NAME:
        case SORT_BY_POSITION:
          return a.children[i].textContent
            .localeCompare(b.children[i].textContent);

        case SORT_BY_AGE:
          return +a.children[i].textContent - +b.children[i].textContent;

        case SORT_BY_SALARY:
          return salaryToNumber(a.children[i].textContent)
            - salaryToNumber(b.children[i].textContent);
      }
    });
  }

  return tbEl;
}
