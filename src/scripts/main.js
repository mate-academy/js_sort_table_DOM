'use strict';

const table = document.querySelector('table');
const tBody = document.querySelector('tbody');
const tr = tBody.querySelectorAll('tr');

table.addEventListener('click', (e) => {
  const header = e.target.closest('th');

  if (header) {
    const trArr = [...tr];

    if (e.target.textContent === 'Name') {
      trArr.sort((a, b) =>
        a.children[0].textContent
          .localeCompare(b.children[0].textContent));
    } else if (e.target.textContent === 'Position') {
      trArr.sort((a, b) =>
        a.children[1].textContent
          .localeCompare(b.children[1].textContent));
    } else if (e.target.textContent === 'Age') {
      trArr.sort((a, b) => +a.children[2].textContent
        - +b.children[2].textContent);
    } else if (e.target.textContent === 'Salary') {
      trArr.sort((a, b) => {
        return convertSalary(a.children[3].textContent)
        - convertSalary(b.children[3].textContent);
      });
    }

    for (const oneTr of trArr) {
      tBody.append(oneTr);
    }
  }
});

function convertSalary(salary) {
  return +salary.slice(1).split(',').join('');
};
