'use strict';

const table = document.querySelector('tbody');
const data = document.querySelectorAll('tbody tr');
const header = document.querySelectorAll('thead th');

header.forEach((title) => {
  title.addEventListener('click', sorting);
});

function sorting(title) {
  const targetIndex = [...header].indexOf(title.target);

  const sortedData = [...data].sort((a, b) => {
    const dataA = a.children[targetIndex].textContent;
    const dataB = b.children[targetIndex].textContent;

    if (dataA[0] === '$' || !isNaN(+dataA)) {
      return +dataA.replace(/\D/g, '') - +dataB.replace(/\D/g, '');
    }

    return dataA.localeCompare(dataB);
  });

  table.append(...sortedData);
}
