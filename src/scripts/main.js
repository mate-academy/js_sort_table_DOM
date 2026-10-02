'use strict';

// write code here
const tbodyTr = document.querySelector('tbody');
const theadTr = document.querySelectorAll('thead tr');

theadTr[0].addEventListener('click', (elem) => {
  const targetName = elem.target.textContent;

  if (targetName === 'Name' || targetName === 'Position') {
    sortAbc(tbodyTr, targetName);
  } else {
    sort123(tbodyTr, targetName);
  }
});

function sortAbc(elements, nameOrPos) {
  let index = 0;

  if (nameOrPos === 'Name') {
    index = 0;
  } else {
    index = 1;
  }

  const elem = elements.children;

  for (let i = 0; i < elem.length; i++) {
    let minItem = elem[i];
    let maxItem = elem[i].children[index].textContent;

    for (let x = i + 1; x < elem.length; x++) {
      if (maxItem.localeCompare(elem[x].children[index].textContent) > 0) {
        maxItem = elem[x].children[index].textContent;
        minItem = elem[x];
      }
    }

    elem[i].before(minItem);
  }
}

function sort123(elements, ageOrSalar) {
  let index = 0;

  if (ageOrSalar === 'Age') {
    index = 2;
  } else {
    index = 3;
  }

  const elem = elements.children;

  for (let i = 0; i < elem.length; i++) {
    let minItem = elem[i];
    let minNumb = elem[i].children[index].textContent;

    for (let x = i + 1; x < elem.length; x++) {
      if (
        parseSalary(minNumb) > parseSalary(elem[x].children[index].textContent)
      ) {
        minNumb = elem[x].children[index].textContent;
        minItem = elem[x];
      }
    }

    elem[i].before(minItem);
  }
}

function parseSalary(elements) {
  let result = '';

  for (const elem of elements) {
    if (!Number.isNaN(Number(elem))) {
      result += elem;
    }
  }

  return Number(result);
}
