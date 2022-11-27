'use strict';

const title = document.querySelectorAll('th');

for (const titleName of title) {
  titleName.addEventListener('click', (e) => {
    const item = e.target;
    const tbody = document.querySelector('tbody');
    const rows = [...tbody.querySelectorAll('tr')];
    const i = [...title].indexOf(item);

    switch (item.innerText) {
      case 'Salary':
      case 'Age':
        rows.sort((a, b) =>
          Number(a.children[i].innerText.replace(/[, $]/g, ''))
          - Number(b.children[i].innerText.replace(/[, $]/g, '')));
        break;

      case 'Name':
      case 'Position':
        rows.sort((a, b) => (a.children[i].innerText
          .localeCompare(b.children[i].innerText)));
        break;
    }

    for (const row of rows) {
      tbody.append(row);
    }
  });
}
