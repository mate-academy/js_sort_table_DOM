'use strict';

const thead = document.querySelector('thead');
const theadList = thead.querySelector('tr');

const tbody = document.querySelector('tbody');
const tbodyList = [...tbody.querySelectorAll('tr')];

function toNumber(a) {
  return parseInt(a.split('$').join('').split(',').join(''));
}

function sortElement(headTH, num) {
  let sorted = [];

  if (headTH === 'Name' || headTH === 'Position') {
    sorted = tbodyList.sort((a, b) => {
      const aNum = a.children[num].textContent;
      const bNum = b.children[num].textContent;

      return aNum.localeCompare(bNum);
    });
  } else if (headTH === 'Age') {
    sorted = tbodyList.sort(
      (a, b) => a.children[num].textContent - b.children[num].textContent,
    );
  } else if (headTH === 'Salary') {
    sorted = tbodyList.sort(
      (a, b) =>
        toNumber(a.children[num].textContent) -
        toNumber(b.children[num].textContent),
    );
  }

  sorted.forEach((tr) => tbody.append(tr));
}

theadList.addEventListener('click', (e) => {
  const th = e.target;

  switch (th.textContent) {
    case 'Name':
      sortElement('Name', 0);
      break;
    case 'Position':
      sortElement('Position', 1);
      break;
    case 'Age':
      sortElement('Age', 2);
      break;
    case 'Salary':
      sortElement('Salary', 3);
      break;
  }
});
