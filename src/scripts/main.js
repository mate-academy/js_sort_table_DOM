'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tr = [...tbody.children];

thead.addEventListener('click', (e) => {
  const index = e.target.cellIndex;

  const sortedList = tr.sort((a, b) => {
    // const salaryToNumber = (value) => Number(value.replace(/[$,]/g, ''));
    // const max = salaryToNumber(a.cells[index].textContent);
    // const min = salaryToNumber(b.cells[index].textContent);

    const max = a.cells[index].textContent.replace(/[$,]/g, '');
    const min = b.cells[index].textContent.replace(/[$,]/g, '');

    if (isNaN(max)) {
      return max.localeCompare(min);
    } else {
      return min - max;
    }
  });

  tbody.append(...sortedList);
});
