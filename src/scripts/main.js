'use strict';

const headRow = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');
const list = [...tbody.querySelectorAll('tr')];

headRow.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const i = [...headRow.children].indexOf(e.target);
  let callback;

  switch (i) {
    case 2:
      callback = (a, b) => a.children[i].innerText - b.children[i].innerText;
      break;

    case 3:
      callback = (a, b) => getSalary(a) - getSalary(b);
      break;

    default:
      callback = (a, b) => {
        return a.children[i].innerText.localeCompare(b.children[i].innerText);
      };
  }

  function getSalary(row) {
    return +row.children[3].innerText.slice(1).split(',').join('');
  }

  tbody.innerHTML = '';
  list.sort(callback).forEach(tr => tbody.append(tr));
});
