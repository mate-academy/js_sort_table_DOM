'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const rowName = e.target.innerText;

  [...tbody.children].sort((a, b) => {
    let A, B;

    if (rowName === 'Age') {
      return +a.cells[2].innerText - +b.cells[2].innerText;
    }

    if (rowName === 'Salary') {
      A = parseFloat(a.cells[3].innerText.slice(1));
      B = parseFloat(b.cells[3].innerText.slice(1));

      return A - B;
    }

    if (rowName === 'Name') {
      A = a.cells[0].innerText;
      B = b.cells[0].innerText;

      return A.localeCompare(B);
    }

    if (rowName === 'Position') {
      A = a.cells[1].innerText;
      B = b.cells[1].innerText;

      return A.localeCompare(B);
    };
  }).forEach(element => {
    tbody.append(element);
  });
});
