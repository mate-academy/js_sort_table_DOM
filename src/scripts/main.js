'use strict';

const headers = Array.from(document.querySelector('thead').children[0].cells);
const staff = Array.from(document.querySelector('tbody').children);
const list = document.querySelector('tbody');
let arraySort = [];

function formatItem(item) {
  return Number(item.match(/\d+/g).join(''));
}

function sortStaff(i) {
  arraySort = [];

  const isDollars = staff[0].children[i].textContent.includes('$');

  staff.forEach(person => {
    if (isDollars) {
      arraySort.push(formatItem(person.children[i].textContent));
    } else {
      arraySort.push(person.children[i].textContent);
    }
  });

  if (isDollars) {
    arraySort.sort((a, b) => a - b).forEach(element => {
      staff.forEach(person => {
        if (formatItem(person.children[i].textContent) === element) {
          list.append(person);
        };
      });
    });
  } else {
    arraySort.sort().forEach(element => {
      staff.forEach(person => {
        if (person.children[i].textContent === element) {
          list.append(person);
        };
      });
    });
  }
}

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', ev => {
    sortStaff(i);
  });
}
