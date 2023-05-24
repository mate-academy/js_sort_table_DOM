'use strict';

const headers = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const rows = tbody.rows;

headers.addEventListener('click', e => {
  const target = e.target;
  const headerList = headers.firstElementChild.children;
  const index = [...headerList].findIndex(tag => tag === target);
  let sort;

  if (e.target.innerText === 'Salary') {
    sort = [...rows].sort((a, b) => {
      const start = a.children[index].innerText.slice(1).replace(',', '.');
      const end = b.children[index].innerText.slice(1).replace(',', '.');

      return end - start;
    });
  } else {
    sort = [...rows].sort((a, b) => {
      const start = a.children[index].innerText;
      const end = b.children[index].innerText;

      return end.localeCompare(start);
    });
  }

  for (const element of sort) {
    tbody.prepend(element);
  }
});
