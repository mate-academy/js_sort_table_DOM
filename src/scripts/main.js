'use strict';

const headers = Array.from(document.querySelector('thead').children[0].cells);
const list = document.querySelector('tbody');
let arraySort = [];
let staff = [];

for (let i = 0; i < headers.length; i++) {
  headers[i].addEventListener('click', ev => {
    sortStaff(i);
  });
}

function formatItem(item) {
  return Number(item.match(/\d+/g).join(''));
}

function sortStaff(i) {
  staff = Array.from(document.querySelector('tbody').children);
  arraySort = [];

  const isDollars = staff[0].children[i].textContent.includes('$');

  staff.forEach(person => {
    arraySort.push(
      isDollars
        ? formatItem(person.children[i].textContent)
        : person.children[i].textContent
    );
  });

  isDollars
    ? arraySort.sort((a, b) => a - b)
    : arraySort.sort();

  // if (isDollars) {
  //   staff.forEach(person => {
  //     arraySort.push(formatItem(person.children[i].textContent));
  //   });

  //   arraySort.sort((a, b) => a - b);
  // } else {
  //   staff.forEach(person => {
  //     arraySort.push(person.children[i].textContent);
  //   });

  //   arraySort.sort();
  // }

  rowRender(i, isDollars);
}

function rowRender(i, isDollars) {
  arraySort.forEach(element => {
    const row = staff.find(person => {
      return isDollars
        ? formatItem(person.children[i].textContent) === element
        : person.children[i].textContent === element;
    });

    list.append(row);

    staff.splice(staff.indexOf(row), 1);
  });
}
