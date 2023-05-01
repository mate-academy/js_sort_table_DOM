'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const bodyRows = [...tbody.rows];

thead.addEventListener('click', e => {
  if (!e.target.tagName === 'TH') {
    return;
  };

  const targetIndex = e.target.closest('th').cellIndex;

  const number = string => string.replace(/[$,]/g, '');

  const sortTable = bodyRows.sort((a, b) => {
    const valueA = number(a.children[targetIndex].textContent);
    const valueB = number(b.children[targetIndex].textContent);

    if (!isNaN(valueA)) {
      return valueA - valueB;
    };

    return valueA.localeCompare(valueB);
  });

  tbody.append(...sortTable);
});
