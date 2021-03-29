'use strict';

const table = document.querySelector('table');

table.addEventListener('click', e => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const salaryConvert = (input) => {
    return input.replace('$', '').replace(',', '');
  };

  const list = table.querySelector('tbody');

  const rowsArray = [...list.rows].sort((current, next) => {
    const targetIndex = e.target.cellIndex;
    const currentConverted = salaryConvert(
      current.children[targetIndex].textContent
    );
    const nextConverted = salaryConvert(
      next.children[targetIndex].textContent
    );

    if ((Number.isNaN(+currentConverted))) {
      return currentConverted.localeCompare(nextConverted);
    }

    return currentConverted - nextConverted;
  });

  list.append(...rowsArray);
});
