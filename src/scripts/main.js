'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const filters = thead.firstElementChild.children;

for (let i = 0; i < filters.length; i++) {
  filters[i].addEventListener('click', () => {
    const sortedTable = [...tbody.children].sort(
      (a, b) => {
        const one = a.children[i].innerHTML;
        const two = b.children[i].innerHTML;

        if (filters[i].innerText === 'Age') {
          return one - two;
        } else if (filters[i].innerText === 'Salary') {
          return parseInt(one.slice(1))
          - parseInt(two.slice(1));
        } else {
          return one.localeCompare(two);
        }
      });

    tbody.append(...sortedTable);
  });
}
