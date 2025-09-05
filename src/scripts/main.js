'use strict';

// write code her
function parseSalary(string) {
  return Number(string.replace(/[^\d.]/g, ''));
}

const title = document.querySelector('thead');
const body = document.querySelector('tbody');
const newThead = [...title.querySelectorAll('th')];

newThead.forEach((th) => {
  th.addEventListener('click', () => {
    const row = [...body.querySelectorAll('tr')];
    const index = newThead.indexOf(th);

    if (th.textContent === 'Name' || th.textContent === 'Position') {
      row.sort((a, b) => {
        const rowA = a.cells[index].textContent.trim();
        const rowB = b.cells[index].textContent.trim();

        return rowA.localeCompare(rowB);
      });
    } else if (th.textContent === 'Age' || th.textContent === 'Salary') {
      row.sort((a, b) => {
        const rowA = parseSalary(a.cells[index].textContent.trim());
        const rowB = parseSalary(b.cells[index].textContent.trim());

        return rowA - rowB;
      });
    }
    body.innerHTML = '';
    row.forEach((r) => body.appendChild(r));
  });
});
