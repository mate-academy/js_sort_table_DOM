'use strict';

const tbody = document.querySelector('tbody');
const arrSort = [];

document.body.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') {
    return;
  }

  const value = event.target.innerText;
  let index = 0;

  switch (value) {
    case 'Name':
      index = 0;
      break;
    case 'Position':
      index = 1;
      break;
    case 'Age':
      index = 2;
      break;
    case 'Salary':
      index = 3;
      break;
  }

  for (const child of tbody.children) {
    arrSort.push(child);
  }

  arrSort.sort((a, b) => {
    const first = a.children[index].textContent.replace(/[$,]/g, '');
    const second = b.children[index].textContent.replace(/[$,]/g, '');

    if (index === 3) {
      return first - second;
    }

    return first.localeCompare(second);
  });

  for (const child of arrSort) {
    tbody.append(child);
  }
});
