'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  const n = e.target.closest('th').cellIndex;

  const array = [...tbody.querySelectorAll('tr')];

  array.sort((a, b) => {
    if (n > 1) {
      return (
        parseNumber(a.cells[n].textContent) -
        parseNumber(b.cells[n].textContent)
      );
    }

    return a.cells[n].textContent.localeCompare(b.cells[n].textContent);
  });

  tbody.append(...array);
});

function parseNumber(number) {
  return +number.replace(/\D/g, '');
}
