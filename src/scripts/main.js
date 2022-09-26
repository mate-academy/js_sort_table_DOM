'use strict';

// write code here
const headers = document.querySelector('thead tr');
const tableBody = document.querySelector('tbody');
const list = [...tableBody.querySelectorAll('tr')];

headers.addEventListener('click', action => {
  if (action.target.tagName !== 'TH') {
    return;
  }

  const index = [...headers.children].indexOf(action.target);
  let callback;

  switch (index) {
    case 2: // age
      callback = (a, b) => a.children[index].innerText
      - b.children[index].innerText;
      break;

    case 3: // salary
      callback = (a, b) => getSalary(a) - getSalary(b);
      break;

    default: // name && position
      callback = (a, b) => {
        return a.children[index].innerText
          .localeCompare(b.children[index].innerText);
      };
  }

  function getSalary(row) {
    return +row.children[3].innerText.slice(1).split(',').join('');
  }

  tableBody.innerHTML = '';
  list.sort(callback).forEach(tr => tableBody.append(tr));
});
