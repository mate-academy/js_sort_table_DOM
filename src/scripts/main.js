'use strict';

// write code here
const theads = [...document.querySelectorAll('thead tr th')];
const tbody = document.querySelector('tbody');
const tbodyChildren = [...document.querySelectorAll('tbody tr')];

theads.forEach((thead, index) => {
  thead.addEventListener('click', () => {
    const sorted = tbodyChildren.sort((a, b) => {
      const valueA = a
        .querySelector(`*:nth-child(${index + 1})`)
        .textContent.split(' ')
        .join('')
        .replaceAll('$', '');
      const valueB = b
        .querySelector(`*:nth-child(${index + 1})`)
        .textContent.split(' ')
        .join('')
        .replaceAll('$', '');

      if (!isNaN(parseFloat(valueA)) && !isNaN(parseFloat(valueB))) {
        return parseFloat(valueA) - parseFloat(valueB);
      }

      return valueA.localeCompare(valueB);
    });

    tbody.innerHTML = '';
    sorted.forEach((el) => tbody.append(el));
  });
});
