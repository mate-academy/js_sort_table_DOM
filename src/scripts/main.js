'use strict';

const title = document.querySelectorAll('th');

for (const titleName of title) {
  titleName.addEventListener('click', (e) => {
    const item = e.target;
    const tbody = document.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];

    switch (item.innerText) {
      case 'Age' || 'Salary':
        const i = [...title].indexOf(item);

        rows.sort((a, b) =>
          Number(a.children[i].innerText.replace(/[, $]/g, ''))
          - Number(b.children[i].innerText.replace(/[, $]/g, '')));

        for (const row of rows) {
          tbody.append(row);
        }
        break;

      case 'Name' || 'Position':
        rows.sort((a, b) => (a.children[i].innerText
          .localeCompare(b.children[i].innerText)));

        for (const row of rows) {
          tbody.append(row);
        }
        break;
    }
  });
}
