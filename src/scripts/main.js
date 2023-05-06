'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');
const rows = [...tbody.rows];

thead.addEventListener('click', e => {
  const index = e.target.closest('th').cellIndex;
  const number = string => string.replace(/[$,]/g, '');

  const sortTab = rows.sort((a, b) => {
    const aVal = number(a.children[index].textContent);
    const bVal = number(b.children[index].textContent);

    if (!isNaN(aVal)) {
      return aVal - bVal;
    };

    return aVal.localeCompare(bVal);
  });

  if (e.target.tagName !== 'TH') {
    return;
  };

  tbody.append(...sortTab);
});
