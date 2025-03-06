'use strict';

const table = document.querySelector('table');
let isAsc = true;

table.querySelector('thead tr').addEventListener('click', (e) => {
  const tBody = table.querySelector('tbody');
  const rows = [...tBody.querySelectorAll('tr')];
  const title = e.target.textContent;
  const tHead = table.querySelector('thead');
  const headers = [...tHead.querySelectorAll('tr th')];
  const titles = [];

  headers.forEach((header) => {
    titles.push(header.innerText);
  });

  const titleIndex = titles.indexOf(title);

  rows.sort((a, b) => {
    const aElement = a.children[titleIndex].textContent.trim();
    const bElement = b.children[titleIndex].textContent.trim();

    if (title === 'Salary') {
      const aSalary = parseFloat(
        a.children[titleIndex].textContent.split('$')[1],
      );
      const bSalary = parseFloat(
        b.children[titleIndex].textContent.split('$')[1],
      );

      return isAsc ? aSalary - bSalary : bSalary - aSalary;
    }

    return isAsc
      ? aElement.localeCompare(bElement)
      : bElement.localeCompare(aElement);
  });

  rows.forEach((row) => {
    tBody.appendChild(row);
  });

  isAsc = !isAsc;
});
