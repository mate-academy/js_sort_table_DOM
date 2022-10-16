'use strict';

const tableHead = document.querySelector('thead');
const headTopic = [...document.querySelectorAll('thead th')]
  .map(i => i.innerText);

const tableBody = document.querySelector('tbody');
const rows = [...tableBody.querySelectorAll('tr')];

tableHead.addEventListener('click', (e) => {
  let sorted;
  const target = e.target.closest('th').innerText;
  const cellNum = headTopic.indexOf(target);

  if (cellNum >= 2) {
    sorted = rows.sort((a, b) =>
      cell(a, cellNum) - (cell(b, cellNum)));
  } else {
    sorted = rows.sort((a, b) =>
      cell(a, cellNum).localeCompare(cell(b, cellNum)));
  };
  sorted.map(i => tableBody.appendChild(i));
});

const cell = (row, n) => row.children[n]
  .textContent.replace(/[$,]/g, '');
