'use strict';

const headers = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.rows;

headers.addEventListener('click', e => {
  const target = e.target;
  const headerList = headers.firstElementChild.children;
  const index = [...headerList].findIndex(tag => tag === target);

  const sort = [...rows].sort((a, b) => {
    const start = a.children[index].innerText;
    const end = b.children[index].innerText;

    if (target.innerText === 'Salary') {
      const parseSalary = salary =>
        parseFloat(salary.slice(1).replace(',', '.'));

      return parseSalary(end) - parseSalary(start);
    } else {
      return end.localeCompare(start);
    }
  });

  sort.forEach(el => tbody.prepend(el));
});
