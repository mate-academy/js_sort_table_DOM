'use strict';

// const headers = document.querySelectorAll('th');
const headers = document.querySelector('thead');
const rows = [...document.querySelectorAll('tbody tr')];

headers.addEventListener('click', (e) => {
  const i = e.target.cellIndex;
  const type = e.target.textContent;

  if (type === 'Age' || type === 'Salary') {
    rows.sort(
      (tr1, tr2) =>
        tr1.cells[i].textContent.replace(/\D/g, '') -
        tr2.cells[i].textContent.replace(/\D/g, ''),
    );
  } else {
    rows.sort((tr1, tr2) => {
      return tr1.cells[i].textContent.localeCompare(tr2.cells[i].textContent);
    });
  }
  document.querySelector('tbody').append(...rows);
});
