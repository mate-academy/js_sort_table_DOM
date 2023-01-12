'use strict';

const tbody = document.body.querySelector('tbody');
const trBody = tbody.querySelectorAll('tr');

addEventListener('click', (e) => {
  const target = e.target.closest('th');
  const cellIndex = target.cellIndex;

  if (!target) {
    return;
  }

  const sortedTr = [...trBody].sort((a, b) => {
    const value1 = a.children[cellIndex].textContent;
    const value2 = b.children[cellIndex].textContent;

    if (!isNaN(+value1)) {
      return value1 - value2;
    } else if (value1[0] === '$') {
      return value1.slice(1).split(',').join('') - value2
        .slice(1).split(',').join('');
    } else if (typeof value1 === 'string') {
      return value1.localeCompare(value2);
    }
  });

  sortedTr.forEach(item => {
    return tbody.append(item);
  });
});
