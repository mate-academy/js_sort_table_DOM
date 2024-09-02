'use strict';

const headers = document.querySelectorAll('thead th');

headers.forEach((header) => {
  header.addEventListener('click', () => {
    const tableBody = document.querySelector('tbody');
    const rows = [...tableBody.querySelectorAll('tr')];
    const title = header.innerText;

    rows.sort((row1, row2) => {
      switch (title) {
        case 'Name': {
          return row1.children[0].innerText.localeCompare(
            row2.children[0].innerText,
          );
        }

        case 'Position': {
          return row1.children[1].innerText.localeCompare(
            row2.children[1].innerText,
          );
        }

        case 'Age': {
          return (
            Number(row1.children[2].innerText) -
            Number(row2.children[2].innerText)
          );
        }

        case 'Salary': {
          return (
            Number(row1.children[3].innerText.replace(/[$,]/g, '')) -
            Number(row2.children[3].innerText.replace(/[$,]/g, ''))
          );
        }
      }
    });

    tableBody.innerHTML = '';
    rows.forEach((row) => tableBody.append(row));
  });
});
