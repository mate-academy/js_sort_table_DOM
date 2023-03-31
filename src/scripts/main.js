'use strict';

const headerList = [...document.querySelectorAll('th')];
const list = [...document.querySelectorAll('tr')].slice(1, -1);
const listBody = document.querySelector('tbody');

function sort(e) {
  if (e.target.tagName === 'TH') {
    const item = e.target;
    const indexForSort = headerList.indexOf(item);
    let sortElements;

    if (indexForSort !== 3) {
      sortElements = list.sort((a, b) =>
        a.cells[indexForSort].innerHTML
          .localeCompare(b.cells[indexForSort].innerHTML));
    } else {
      sortElements = list.sort((a, b) =>
        getCorrectSalary(a.cells[indexForSort].innerHTML) - getCorrectSalary(
          b.cells[indexForSort].innerHTML));
    }

    listBody.innerHTML = '';

    for (let i = 0; i < list.length; i++) {
      listBody.appendChild(sortElements[i]);
    }
  }
}
document.addEventListener('click', sort);

function getCorrectSalary(string) {
  let salary = '';

  for (let i = 0; i < string.length; i++) {
    if (string[i] !== '$' && string[i] !== ',') {
      salary += string[i];
    }
  }

  return +salary;
}
