'use strict';

const titles = document.querySelectorAll('thead th');
const table = document.querySelector('tbody');

function getNumber(str) {
  return +str.split('').filter(num => !isNaN(num)).join('');
}

titles.forEach((element, i) => (
  element.addEventListener('click', () => {
    const titleItems
      = [ ...document.querySelectorAll(`td:nth-child(${i + 1})`) ];

    if (i === 0 || i === 1) {
      titleItems
        .sort((a, b) => a.textContent.localeCompare(b.textContent))
        .forEach(item => table.appendChild(item.parentElement));
    }

    titleItems
      .sort((a, b) => getNumber(a.textContent) - getNumber(b.textContent))
      .forEach(item => table.appendChild(item.parentElement));
  })
));
