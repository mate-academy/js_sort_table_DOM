'use strict';

// write code here
const table = document.querySelector('table');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const tableRows = table.rows;

const tbodyRows = [...tbody.rows];

const headRow = tableRows[0];
const headElements = [...headRow.children];

thead.addEventListener('click', (e) => {
  const link = e.target.closest('th');

  if (!link) {
    return;
  }

  const index = headElements.findIndex(
    (el) => el.textContent === link.textContent,
  );

  const sortType = () => {
    switch (link.textContent) {
      case 'Age':
        return 'number';

      case 'Salary':
        return 'salary';

      case 'Name':
        return 'text';

      case 'Position':
        return 'text';

      default:
        return 'text';
    }
  };

  const newList = [...tbodyRows].sort((rowA, rowB) => {
    const firstEl = Array.from(rowA.children)[index].textContent;
    const secondEl = Array.from(rowB.children)[index].textContent;

    if (sortType() === 'salary') {
      const salaryNum = (salary) => Number(salary.slice(1).split(',').join(''));

      return salaryNum(firstEl) - salaryNum(secondEl);
    }

    if (sortType() === 'number') {
      return Number(firstEl) - Number(secondEl);
    }

    if (sortType() === 'text') {
      return firstEl.localeCompare(secondEl);
    }
  });

  tbody.textContent = '';

  newList.forEach((tr) => {
    tbody.appendChild(tr);
  });
});
