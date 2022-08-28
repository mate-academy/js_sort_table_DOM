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

const headingEventHandler = e => {
  const targetItem = e.target.closest('th');

  if (!targetItem || !heading.contains(targetItem)) {
    return;
  }

  arr.sort((a, b) => {
    const aElement = a.children[targetItem.cellIndex].innerText;
    const bElement = b.children[targetItem.cellIndex].innerText;

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

heading.addEventListener('click', headingEventHandler);
