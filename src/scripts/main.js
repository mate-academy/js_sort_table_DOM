/* eslint-disable function-paren-newline */
'use strict';

// write code here
const header = document.getElementById('header');
const body = document.getElementById('body');

const rows = [];

const theads = header.querySelectorAll('th');
const tbodies = body.querySelectorAll('tr');

tbodies.forEach((tb) => {
  const row = {};

  const tds = tb.querySelectorAll('td');

  for (let i = 0; i < tds.length; i++) {
    row[theads[i].innerText] = tds[i].innerText;
  }

  rows.push(row);
});

header.addEventListener('click', (e) => {
  const head = e.target.closest('th');

  if (head) {
    const mainKey = head.innerText;

    let newRows = [...rows].sort((a, b) =>
      compareTwoStrings(a[mainKey], b[mainKey]),
    );

    if (mainKey.toLowerCase() === 'age' || mainKey.toLowerCase() === 'salary') {
      newRows = [...newRows].sort((a, b) => {
        return a[mainKey].toString().length - b[mainKey].toString().length;
      });
    }

    body.innerHTML = '';

    newRows.forEach((el) => {
      const tr = document.createElement('tr');

      for (const key in el) {
        const td = document.createElement('td');

        td.innerText = el[key];

        tr.appendChild(td);
      }

      body.appendChild(tr);

      return tr;
    });
  }
});

const compareTwoStrings = (a, b) => {
  return a.toString().localeCompare(b.toString());
};
