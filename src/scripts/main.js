'use strict';

// write code here
const tableRows = document.querySelectorAll('tr');
const headers = tableRows[0].children;
const tBody = document.querySelector('tbody');

// console.log(rows);

for (let i = 0; i < headers.length; i++) {
  const header = headers[i];

  header.addEventListener('click', () => {
    const rows = [...tBody.children];

    rows.sort((a, b) => {
      if (header.textContent === 'Age') {
        return Number(a.children[i].textContent)
          - Number(b.children[i].textContent);
      }

      if (header.textContent === 'Salary') {
        const salaryA = Number(
          a.children[i].textContent.replace('$', '').replace(',', '')
        );

        const salaryB = Number(
          b.children[i].textContent.replace('$', '').replace(',', '')
        );

        return salaryA - salaryB;
      }

      return a.children[i].textContent.localeCompare(
        b.children[i].textContent
      );
    });

    tBody.append(...rows);
  });
}
