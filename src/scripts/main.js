'use strict';

const head = document.querySelector('thead');

const headRow = head.querySelector('tr');

const body = document.querySelector('tbody');

const bodyRows = body.querySelectorAll('tr');

headRow.addEventListener('click', (e) => {
  switch (e.target.textContent) {
    case 'Name':
      const newBodyRows1 = [...bodyRows].sort((a, b) => (
        a.cells[0].textContent.localeCompare(b.cells[0].textContent)
      ));

      bodyRows.forEach(node => node.parentNode.removeChild(node));
      newBodyRows1.forEach(node => body.appendChild(node));

      break;

    case 'Position':
      const newBodyRows2 = [...bodyRows].sort((a, b) => (
        a.cells[1].textContent.localeCompare(b.cells[1].textContent)
      ));

      bodyRows.forEach(node => node.parentNode.removeChild(node));
      newBodyRows2.forEach(node => body.appendChild(node));

      break;

    case 'Age':
      const newBodyRows3 = [...bodyRows].sort((a, b) => (
        +(a.cells[2].textContent) - +(b.cells[2].textContent)
      ));

      bodyRows.forEach(node => node.parentNode.removeChild(node));
      newBodyRows3.forEach(node => body.appendChild(node));

      break;

    case 'Salary':
      const newBodyRows4 = [...bodyRows].sort((a, b) => {
        const aSalaryStr = a.cells[3].textContent.replace(/[^\d]/g, '');
        const aSalaryValue = parseInt(aSalaryStr, 10);
        const bSalaryStr = b.cells[3].textContent.replace(/[^\d]/g, '');
        const bSalaryValue = parseInt(bSalaryStr, 10);

        return aSalaryValue - bSalaryValue;
      });

      bodyRows.forEach(node => node.parentNode.removeChild(node));
      newBodyRows4.forEach(node => body.appendChild(node));

      break;
  }
});
