'use strict';

const table = document.querySelector('table');

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
    if (title === 'Name') {
      return a.children[titleIndex].textContent
        .trim()
        .localeCompare(b.children[titleIndex].textContent.trim());
    }

    if (title === 'Position') {
      return a.children[titleIndex].textContent
        .trim()
        .localeCompare(b.children[titleIndex].textContent.trim());
    }

    if (title === 'Age') {
      return a.children[titleIndex].textContent
        .trim()
        .localeCompare(b.children[titleIndex].textContent.trim());
    }

    if (title === 'Salary') {
      const aSalary = parseFloat(
        a.children[titleIndex].textContent.split('$')[1],
      );
      const bSalary = parseFloat(
        b.children[titleIndex].textContent.split('$')[1],
      );

      return aSalary - bSalary;
    }
  });

  rows.forEach((row) => {
    tBody.appendChild(row);
  });
});
