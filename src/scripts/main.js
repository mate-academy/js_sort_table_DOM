'use strict';

const thead = document.querySelector('thead');
const theadRow = thead.querySelector('tr');
const tbody = document.querySelector('tbody');
const rows = [...tbody.querySelectorAll('tr')];

for (let i = 0; i < theadRow.children.length; i++) {
  theadRow.children[i].onclick = () => {
    if (isNaN(+(rows[0].children[i]
      .textContent
      .replace(/\D/, '')
      .replace(',', '')))) {
      rows.sort((a, b) => a.children[i]
        .textContent
        .localeCompare(b.children[i].textContent));
      rows.forEach(row => tbody.append(row));
    } else {
      rows.sort((a, b) => {
        return +(a.children[i].textContent
          .replace(/\D/, '')
          .replace(',', ''))
            - +(b.children[i].textContent
              .replace(/\D/, '')
              .replace(',', ''));
      });
      rows.forEach(row => tbody.append(row));
    }
  };
}
