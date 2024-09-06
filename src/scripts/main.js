'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');
const tr = tbody.querySelectorAll('tr');
const rows = [...tr];

thead.addEventListener('click', (e) => {
  const sortBy = [...thead.children[0].children].findIndex(
    (el) => el.textContent === e.target.textContent,
  );

  rows.sort((tableRow1, tableRow2) => {
    if (
      e.target.textContent.toLowerCase() === 'age' ||
      e.target.textContent.toLowerCase() === 'salary'
    ) {
      if (tableRow1.children[sortBy].innerText.includes('$')) {
        const a = tableRow1.children[sortBy].innerText
          .replace('$', '')
          .replace(',', '');
        const b = tableRow2.children[sortBy].innerText
          .replace('$', '')
          .replace(',', '');

        return +a - +b;
      } else {
        return (
          +tableRow1.children[sortBy].innerText -
          +tableRow2.children[sortBy].innerText
        );
      }
    }

    if (
      e.target.textContent.toLowerCase() === 'name' ||
      e.target.textContent.toLowerCase() === 'position'
    ) {
      return tableRow1.children[sortBy].innerText.localeCompare(
        tableRow2.children[sortBy].innerText,
      );
    }
  });

  rows.forEach((el) => {
    tbody.append(el);
  });
});
