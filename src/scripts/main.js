'use strict';

const headElement = document.querySelector('thead');
const tableElement = document.querySelector('tbody');

const clickOnHeaders = () => {
  headElement.addEventListener('click', () => {
    const rows = Array.from(tableElement.querySelectorAll('tr'));

    const salaryRowPairs = rows.map((row) => {
      const salaryElement = row.lastElementChild;
      const salary = parseFloat(
        salaryElement.textContent.trim().replace('$', '').replace(',', ''),
      );

      return { salary, row };
    });

    salaryRowPairs.sort((a, b) => a.salary - b.salary);

    tableElement.innerHTML = '';
    salaryRowPairs.forEach((pair) => tableElement.appendChild(pair.row));
  });
};

clickOnHeaders();
