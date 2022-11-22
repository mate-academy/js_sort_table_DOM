'use strict';

const title = document.querySelectorAll('th');

for (const titleName of title) {
  titleName.addEventListener('click', (e) => {
    const item = e.target;
    const tbody = document.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];

    if (item.innerText === 'Age' || item.innerText === 'Salary') {
      let i = [...title].indexOf(item);

      if (i === 6) {
        i = 2;
      }

      if (i === 7) {
        i = 3;
      }

      rows.sort((a, b) => Number(a.children[i].innerText.replace(/[, $]/g, ''))
        - Number(b.children[i].innerText.replace(/[, $]/g, '')));

      for (const row of rows) {
        tbody.append(row);
      }
    }

    if (item.innerText === 'Name' || item.innerText === 'Position') {
      let i = [...title].indexOf(item);

      if (i === 4) {
        i = 0;
      }

      if (i === 5) {
        i = 1;
      }

      rows.sort((a, b) => (a.children[i].innerText
        .localeCompare(b.children[i].innerText)));

      for (const row of rows) {
        tbody.append(row);
      }
    }
  });
}
