'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

thead.addEventListener('click', (e) => {
  const rowName = e.target.innerText;
  const index = e.target.cellIndex;
  let A, B;

  [...tbody.children].sort((a, b) => {
    if (rowName === 'Age') {
      return +a.cells[index].innerText - +b.cells[index].innerText;
    }

    if (rowName === 'Salary') {
      A = parseFloat(a.cells[index].innerText.slice(1));
      B = parseFloat(b.cells[index].innerText.slice(1));

      return A - B;
    }

    A = a.cells[index].innerText;
    B = b.cells[index].innerText;

    return A.localeCompare(B);
  }).forEach(element => {
    tbody.append(element);
  });
});
