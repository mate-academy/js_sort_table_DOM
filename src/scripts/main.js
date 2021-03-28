'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const bodyRow = document.querySelectorAll('tbody tr');

const salaryConvert = (input) => {
  return input.replace('$', '').replace(',', '');
};

thead.addEventListener('click', (e) => {
  const sort = [...bodyRow].sort((current, next) => {
    const targetIndex = e.target.cellIndex;
    const currentConverted = salaryConvert(
      current.children[targetIndex].textContent
    );
    const nextConverted = salaryConvert(
      next.children[targetIndex].textContent
    );

    if (isNaN(+currentConverted)) {
      return currentConverted.localeCompare(nextConverted);
    }

    return currentConverted - nextConverted;
  });

  tbody.append(...sort);
});
