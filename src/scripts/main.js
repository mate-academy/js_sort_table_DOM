'use strict';

// write code here
const table = document.querySelector('table');
const tHead = table.tHead;
const data = [];

makeCopyToObj();

Array.from(tHead.rows[0].cells).forEach((th) => {
  th.addEventListener('click', (e) => {
    sorting(e.currentTarget.textContent.toLowerCase());
  });
});

function makeCopyToObj() {
  [...table.tBodies].forEach((block) => {
    [...block.rows].forEach((tr) => {
      data.push({
        name: tr.cells[0].textContent.trim(),
        position: tr.cells[1].textContent.trim(),
        age: parseFloat(tr.cells[2].textContent.replace(/[^\d.-]/g, '')),
        salary: parseFloat(tr.cells[3].textContent.replace(/[^\d.-]/g, '')),
      });
    });
  });
}

function sorting(idx) {
  const sorted = [...data].sort((a, b) => {
    if (typeof a[idx] === 'string') {
      return a[idx].localeCompare(b[idx]);
    } else {
      return a[idx] - b[idx];
    }
  });

  renderTable(sorted);
}

function renderTable(obj) {
  const tbody = table.tBodies[0];

  tbody.innerHTML = '';

  const fragment = document.createDocumentFragment();

  obj.forEach((item) => {
    const tr = document.createElement('tr');

    ['name', 'position', 'age', 'salary'].forEach((key) => {
      const td = document.createElement('td');

      td.textContent = item[key];

      tr.appendChild(td);
    });

    fragment.appendChild(tr);
  });

  tbody.append(fragment);
}
