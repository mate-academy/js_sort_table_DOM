'use strict';

const th = [...document.querySelectorAll('th')];
const tr = [...document.querySelectorAll('tr')].slice(1, -1);
const tbody = document.querySelector('tbody');

function sort(e) {
  if (e.target.tagName === 'TH') {
    const item = e.target;
    const indexForSotr = th.indexOf(item);
    let sortElements;

    if (indexForSotr !== 3) {
      sortElements = tr.sort((a, b) =>
        a.cells[indexForSotr].innerHTML.localeCompare(
          b.cells[indexForSotr].innerHTML));
    } else {
      sortElements = tr.sort((a, b) =>
        corectSalary(a.cells[indexForSotr].innerHTML) - corectSalary(
          b.cells[indexForSotr].innerHTML));
    }

    tbody.innerHTML = '';

    for (let i = 0; i < tr.length; i++) {
      tbody.appendChild(sortElements[i]);
    }
  }
}
document.addEventListener('click', sort);

function corectSalary(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '$' && string[i] !== ',') {
      result += string[i];
    }
  }

  return +result;
}
