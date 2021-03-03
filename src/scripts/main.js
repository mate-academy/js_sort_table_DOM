'use strict';

// write code here
const head = document.querySelector('thead');
const table = document.querySelector('tbody');

head.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  const sortTableElement = [...table.rows].sort((current, next) => {
    const currentValue = current.cells[index].innerHTML;
    const nextValue = next.cells[index].innerHTML;

    const numbersValue = +currentValue.replace(/[^0-9]/g, '');
    const nextNumbersValue = +nextValue.replace(/[^0-9]/g, '');

    return numbersValue
      ? numbersValue - nextNumbersValue
      : currentValue.localeCompare(nextValue);
  });

  table.append(...sortTableElement);
});
