'use strict';

const header = document.querySelectorAll('thead tr th');

[...header].map((element, index) => {
  element.addEventListener('click', (e) => {
    const rows = document.querySelectorAll('tbody tr');

    const sortedRows = [...rows].sort((a, b) => {
      const compareA = a.querySelectorAll('td')[index].innerText;
      const compareB = b.querySelectorAll('td')[index].innerText;

      if (e.target.innerText === 'Salary') {
        return compareA.slice(1).split(',').join('.')
          - compareB.slice(1).split(',').join('.');
      }

      if (typeof (compareA) === 'string') {
        return compareA.localeCompare(compareB);
      }

      return compareA - compareB;
    });

    document.querySelector('tbody').replaceChildren(...rows, ...sortedRows);
  });
});
