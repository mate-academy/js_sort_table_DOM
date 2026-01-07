'use strict';

// write code here
const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const thead = table.querySelector('thead');

const parseSalary = (srt) => {
  return +srt.split('').slice(1).join('').split(',').join('');
};

const sortColumn = (th) => {
  const sorted = [...tbody.children].sort((tr1, tr2) => {
    const a = tr1.cells[th.cellIndex].innerText;
    const b = tr2.cells[th.cellIndex].innerText;

    if (th.innerText === 'Salary') {
      return parseSalary(a) - parseSalary(b);
    }

    return a.localeCompare(b);
  });

  return sorted.forEach((tr) => tbody.appendChild(tr));
};

thead.addEventListener('click', (e) => {
  const th = e.target.closest('th');

  if (!th) return;

  sortColumn(th);
});
