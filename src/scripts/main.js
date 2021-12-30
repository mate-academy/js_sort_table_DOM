'use strict';

// write code here
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  if (e.target.innerText === 'Name') {
    const sort = [...tbody.rows].sort((a, b) => {
      return a.cells[0].innerText.localeCompare(b.cells[0].innerText);
    });

    tbody.append(...sort);
  } else if (e.target.innerText === 'Position') {
    const sort = [...tbody.rows].sort((a, b) => {
      return a.cells[1].innerText.localeCompare(b.cells[1].innerText);
    });

    tbody.append(...sort);
  } else if (e.target.innerText === 'Age') {
    const sortNum = [...tbody.rows].sort((a, b) => {
      return +(a.cells[2].innerText) - +(b.cells[2].innerText);
    });

    tbody.append(...sortNum);
  } else if (e.target.innerText === 'Salary') {
    const sortSalary = [...tbody.rows].sort((a, b) => {
      return +a.cells[3].innerText.replace(/[^0-9]/g, '')
        - +b.cells[3].innerText.replace(/[^0-9]/g, '');
    });

    tbody.append(...sortSalary);
  }
});
