'use strict';

const headRow = document.querySelector('thead').firstElementChild;
const tbody = document.querySelector('tbody');
const data = [];

for (const row of tbody.children) {
  data.push({
    name: row.children[0].textContent,
    position: row.children[1].textContent,
    age: +row.children[2].textContent,
    salary: +row.children[3].textContent.replace(/\$|,/g, ''),
  });
}

for (let i = 0; i < headRow.children.length; ++i) {
  const key = headRow.children[i].innerText.toLowerCase();

  headRow.children[i].addEventListener('click', e => {
    data.sort((a, b) => {
      if (typeof a[key] === 'number') {
        return a[key] - b[key];
      }

      if (a[key] > b[key]) {
        return 1;
      }

      if (a[key] < b[key]) {
        return -1;
      }

      return 0;
    });

    for (let j = 0; j < data.length; ++j) {
      for (let k = 0; k < Object.keys(data[j]).length; ++k) {
        let result = data[j][Object.keys(data[j])[k]];

        if (Object.keys(data[j])[k] === 'salary') {
          result = `$${result.toLocaleString('en-US')}`;
        }

        tbody.children[j].children[k].innerText = result;
      }
    }
  });
}
