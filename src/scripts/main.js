'use strict';

document.addEventListener('click', e => {
  if (e.target.nodeName !== 'TH') {
    return;
  };

  const theadElements = [...document
    .querySelector('thead').firstElementChild.children];
    
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
        case 'Name':
        case 'Position':
          return a.children[i].textContent
            .localeCompare(b.children[i].textContent);

        case 'Age':
          return +a.children[i].textContent - +b.children[i].textContent;

        case 'Salary':
          return salaryToNumber(a.children[i].textContent)
            - salaryToNumber(b.children[i].textContent);
      }
    });
  }

  return tbEl;
}
