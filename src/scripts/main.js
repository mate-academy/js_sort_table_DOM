'use strict';

const tbody = document.querySelector('tbody');
const headRow = document.querySelector('thead tr');
const tr = [...tbody.children];

const normalize = (number) => {
  return +number.slice(1).split(',').join('');
};

headRow.addEventListener('click', e => {
  const sorted = tr.sort((a, b) => {
    const aValue = a.children[e.target.cellIndex].innerText;
    const bValue = b.children[e.target.cellIndex].innerText;

    switch (e.target.cellIndex) {
      case 0:
      case 1:
        return aValue.localeCompare(bValue);
      case 2:
        return aValue - bValue;
      case 3:
        return normalize(aValue) - normalize(bValue);
    }
  });

  sorted.forEach(item => tbody.append(item));
});
