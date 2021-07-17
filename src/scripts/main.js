'use strict';

const table = document.querySelector('table');
const getList = [...document.querySelector('tbody').querySelectorAll('tr')];
const tester = {
  numb: 0,
  words: 0,
};

table.addEventListener('click', push => {
  const cl = push.target.innerText;

  switch (cl) {
    case 'Name':
      tester.words++;
      sortList(getList, 0,);
      break;

    case 'Position':
      tester.words++;
      sortList(getList, 1,);
      break;

    case 'Age':
      tester.numb++;
      sortList(getList, 2,);
      break;

    case 'Salary':
      tester.numb++;
      sortList(getList, 3,);
      break;
  };
});

function sortList(param, column) {
  const listCopy = param;

  listCopy.sort((a, b) => {
    const innerA = a.children[column].innerText;
    const innerB = b.children[column].innerText;

    if (parseNum(innerA)) {
      return (tester.numb % 2 === 0)
        ? parseNum(innerA) - parseNum(innerB)
        : parseNum(innerB) - parseNum(innerA);
    } else {
      return (tester.words % 2 === 0)
        ? innerA.localeCompare(innerB)
        : innerB.localeCompare(innerA);
    };
  });

  document.querySelector('tbody').remove();

  const newTbody = document.createElement('tbody');

  listCopy.forEach(person => {
    const newTr = document.createElement('tr');

    newTr.innerHTML = `
    <td>${person.children[0].innerText}</td>
    <td>${person.children[1].innerText}</td>
    <td>${person.children[2].innerText}</td>
    <td>${person.children[3].innerText}</td>
  `;

    newTbody.append(newTr);
  });

  table.children[0].after(newTbody);
};

function parseNum(par) {
  let result = '';

  for (const char of par) {
    if (
      '1234567890'.includes(char)) {
      result += char;
    }

    if (','.includes(char)) {
      result += '.';
    };
  };

  return +result;
};
