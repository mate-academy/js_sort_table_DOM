'use strict';

const headers = Array.from(document.querySelector('thead').children[0].cells);
const staff = Array.from(document.querySelector('tbody').children);
const list = document.querySelector('tbody');
let arraySort = [];

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', ev => {
    sortStaff(i);
  });
}

function formatItem(item) {
  return Number(item.match(/\d+/g).join(''));
}

function sortStaff(i) {
  arraySort = [];

  const isDollars = staff[0].children[i].textContent.includes('$');

  if (isDollars) {
    staff.forEach(person => {
      arraySort.push(formatItem(person.children[i].textContent));
    });

    arraySort.sort((a, b) => a - b);
  } else {
    staff.forEach(person => {
      arraySort.push(person.children[i].textContent);
    });

    arraySort.sort();
  }

  rowRender(i, isDollars);
}

function rowRender(i, isDollars) {
  arraySort.forEach(element => {
    staff.forEach(person => {
      if (isDollars) {
        if (formatItem(person.children[i].textContent) === element) {
          list.append(person);
        };
      } else {
        if (person.children[i].textContent === element) {
          list.append(person);
        };
      }
    });
  });
}
