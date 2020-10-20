'use strict';

const body = document.querySelector('tbody');

const nameHeader = document.querySelector('thead th:first-child');
const positionHeader = document.querySelector('thead th:nth-child(2)');
const ageHeader = document.querySelector('thead th:nth-child(3)');
const salaryHeader = document.querySelector('thead th:nth-child(4)');

function sortTable(comparator) {
  const sorted = [...body.children].sort(comparator);

  body.innerHTML = '';
  sorted.forEach(element => body.appendChild(element));
};

nameHeader.addEventListener(
  'click',
  () => sortTable(
    (a, b) => a.children[0].textContent.localeCompare(b.children[0].textContent)
  )
);

positionHeader.addEventListener(
  'click',
  () => sortTable(
    (a, b) => a.children[1].textContent.localeCompare(b.children[1].textContent)
  )
);

ageHeader.addEventListener(
  'click',
  () => sortTable(
    (a, b) => b.children[2].textContent - a.children[2].textContent
  )
);

salaryHeader.addEventListener(
  'click',
  () => sortTable(
    (a, b) => {
      const first = a.children[3].textContent.replace(/\$|,/g, '');
      const second = b.children[3].textContent.replace(/\$|,/g, '');

      return second - first;
    }
  )
);
