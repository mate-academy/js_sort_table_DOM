'use strict';

// write code here

const table = document.querySelector('table');
const tbody = document.querySelector('tbody');

table.addEventListener('click', (ev) => {
  const item = ev.target.closest('th');

  if (!item) {
    return;
  }

  const number = item.cellIndex;

  const sortedList = [...tbody.rows].sort((first, second) => {
    const firstValue = first.cells[number].innerText.replace(/[$,]/g, '');
    const secondValue = second.cells[number].innerText.replace(/[$,]/g, '');
    
    if (!isNaN(firstValue)) {
      return firstValue - secondValue;
    } else {
      return firstValue.localeCompare(secondValue);
    };
  })

  tbody.append(...sortedList);
})
