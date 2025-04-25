'use strict';

const nameTh = document.querySelector('#thName');
const position = document.querySelector('#thPos');
const age = document.querySelector('#thAge');
const salary = document.querySelector('#thSalary');

const rows = document.querySelectorAll('tbody tr');

nameTh.addEventListener('click', () => {
  const newRows = Array.from(rows);
  const infos = [];

  newRows.forEach((item) => {
    infos.push(item.cells[0].textContent);
  });

  const sortedInfos = infos.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let i = 0; i < newRows.length; i++) {
    newRows[i].cells[0].textContent = sortedInfos[i];
  }
});

position.addEventListener('click', () => {
  const newRows = Array.from(rows);
  const infos = [];

  newRows.forEach((item) => {
    infos.push(item.cells[1].textContent);
  });

  const sortedInfos = infos.sort((a, b) => {
    return a.localeCompare(b);
  });

  for (let i = 0; i < newRows.length; i++) {
    newRows[i].cells[1].textContent = sortedInfos[i];
  }
});

age.addEventListener('click', () => {
  const newRows = Array.from(rows);
  const infos = [];

  newRows.forEach((item) => {
    infos.push(item.cells[2].textContent);
  });

  const sortedInfos = infos.sort((a, b) => {
    return a - b;
  });

  for (let i = 0; i < newRows.length; i++) {
    newRows[i].cells[2].textContent = sortedInfos[i];
  }
});

salary.addEventListener('click', () => {
  const newRows = Array.from(rows);
  const infos = [];

  newRows.forEach((item) => {
    const strVal = item.cells[3].textContent;
    const numVal = Number(strVal.replace(/[^0-9]/g, ''));

    infos.push({ numVal, strVal });
  });

  const sortedInfos = infos.sort((a, b) => {
    return a.numVal - b.numVal;
  });

  for (let i = 0; i < newRows.length; i++) {
    newRows[i].cells[3].textContent = sortedInfos[i].strVal;
  }
});
