'use strict';

const toNum = (numStr) => {
  if (numStr[0] !== '$') {
    return +numStr;
  }

  return Number(numStr.split(',').join('').slice(1));
};

const heading = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = document.querySelectorAll('tr');
const arr = [];

tr.forEach(item => arr.push(item));
arr.shift();
arr.pop();

const handler = e => {
  const targetItem = e.target.closest('th');

  if (!targetItem || !heading.contains(targetItem)) {
    return;
  }

  let index = null;

  switch (targetItem.innerText) {
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

  arr.sort((a, b) => {
    const aElement = a.children[index].innerText;
    const bElement = b.children[index].innerText;

    if (targetItem.innerText === 'Salary' || targetItem.innerText === 'Age') {
      return toNum(aElement) - toNum(bElement);
    }

    return aElement.localeCompare(bElement);
  });

  tbody.innerHTML = arr.map(item => `
    <tr>
      <td>${item.children[0].innerText}</td>
      <td>${item.children[1].innerText}</td>
      <td>${item.children[2].innerText}</td>
      <td>${item.children[3].innerText}</td>
    </tr>
  `).join('');
};

heading.addEventListener('click', handler);
