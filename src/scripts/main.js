'use strict';

const th = document.querySelectorAll('thead th');
const tr = document.querySelectorAll('tbody tr');
const table = document.querySelector('tbody');

th.forEach(header => {
  header.addEventListener('click', sorting);
});

function sorting(header) {
  const headerIndex = [...th].indexOf(header.target);

  const sortedTable = [...tr].sort((a, b) => {
    const textA = a.children[headerIndex].textContent;
    const textB = b.children[headerIndex].textContent;

    if (textA[0] === '$' || !isNaN(+textA)) {
      return +(textA.replace(/\D/g, ''))
      - +(textB.replace(/\D/g, ''));
    }

    return textA.localeCompare(textB);
  });

  table.append(...sortedTable);
};
