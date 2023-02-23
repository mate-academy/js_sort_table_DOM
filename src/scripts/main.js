'use strict';

const table = document.querySelector('table');

table.addEventListener('click', (e) => {
  const tbody = document.querySelector('tbody');
  const list = tbody.children;
  const tableItem = e.target.closest('th');
  const cellIndex = tableItem.cellIndex;

  const sortList = function(items) {
    return [...items].sort((a, b) => {
      const textA = (a.querySelectorAll('td')[cellIndex]
        .textContent.split('$').join('').split(',').join(''));

      const textB = (b.querySelectorAll('td')[cellIndex]
        .textContent.split('$').join('').split(',').join(''));

      if (isNaN(textA) && isNaN(textB)) {
        return textA > textB ? 1 : -1;
      } else {
        return (textA - textB);
      }
    });
  };

  document.querySelector('tbody').append(...sortList(list, cellIndex));
});
