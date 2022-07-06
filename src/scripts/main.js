'use strict';

const headRow = document.querySelector('thead').firstElementChild;
const tbody = document.querySelector('tbody');
const data = [];

for (const row of tbody.children) {
  data.push([row.children[0].textContent,
    row.children[1].textContent, +row.children[2].textContent,
    +row.children[3].textContent.replace(/\$|,/g, '')]);
}

for (let i = 0; i < headRow.children.length; ++i) {
  headRow.children[i].addEventListener('click', e => {
    if (typeof data[0][i] === 'number') {
      data.sort((a, b) => a[i] - b[i]);
    } else {
      data.sort((a, b) => {
        if (a[i] < b[i]) {
          return -1;
        }

        if (a[i] > b[i]) {
          return 1;
        }

        return 0;
      });
    }

    for (let j = 0; j < data.length; ++j) {
      for (let k = 0; k < data[j].length; ++k) {
        if (headRow.children[k].textContent === 'Salary') {
          tbody.children[j].children[k].innerText
            = `$${data[j][k].toLocaleString('en-US')}`;
        } else {
          tbody.children[j].children[k].innerText = data[j][k];
        }
      }
    }
  });
}
