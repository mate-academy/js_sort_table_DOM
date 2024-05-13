'use strict';

const tableHeaders = [...document.querySelectorAll('thead th')];
const tableRows = [...document.querySelectorAll('tbody tr')];
const tbody = document.querySelector('tbody');

function prepareLetters(rows, pos) {
  rows.sort((a, b) => {
    return a.children[pos].textContent.localeCompare(
      b.children[pos].textContent,
    );
  });
}

function prepareNumbers(rows, pos) {
  rows.sort((a, b) => {
    return a.children[pos].textContent - b.children[pos].textContent;
  });
}

function prepareHTML(rows) {
  tbody.innerHTML = '';

  for (const row of rows) {
    tbody.appendChild(row);
  }
}

tableHeaders.forEach((th) => {
  th.addEventListener('click', (e) => {
    if (e.target.textContent === 'Name') {
      const copyTableRows = [...tableRows];

      prepareLetters(copyTableRows, 0);
      prepareHTML(copyTableRows);
    }

    if (e.target.textContent === 'Position') {
      const copyTableRows = [...tableRows];

      prepareLetters(copyTableRows, 1);
      prepareHTML(copyTableRows);
    }

    if (e.target.textContent === 'Age') {
      const copyTableRows = [...tableRows];

      prepareNumbers(copyTableRows, 2);
      prepareHTML(copyTableRows);
    }

    if (e.target.textContent === 'Salary') {
      const sortedRows = tableRows.sort((a, b) => {
        const salaryOne = a.children[3].textContent
          .slice(1, -1)
          .replace(',', '');
        const salaryTwo = b.children[3].textContent
          .slice(1, -1)
          .replace(',', '');

        return salaryOne - salaryTwo;
      });

      prepareHTML(sortedRows);
    }
  });
});
