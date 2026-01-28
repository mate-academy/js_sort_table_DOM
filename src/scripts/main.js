'use strict';

// write code here

const thead = document.querySelector('thead tr');
const tbody = document.querySelector('tbody');
const getRows = () => [...tbody.querySelectorAll('tr')];

const buttons = [...thead.children];
const nameBtn = buttons[0];
const positionBtn = buttons[1];
const ageBtn = buttons[2];
const salaryBtn = buttons[3];

nameBtn.addEventListener('click', () => {
  const rows = getRows();

  rows.sort((a, b) => {
    const valueA = a.children[0].textContent.trim();
    const valueB = b.children[0].textContent.trim();

    return valueA.localeCompare(valueB);
  });

  tbody.append(...rows);
});

positionBtn.addEventListener('click', () => {
  const rows = getRows();

  rows.sort((a, b) => {
    const valueA = a.children[1].textContent.trim();
    const valueB = b.children[1].textContent.trim();

    return valueA.localeCompare(valueB);
  });

  tbody.append(...rows);
});

ageBtn.addEventListener('click', () => {
  const rows = getRows();

  rows.sort((a, b) => {
    return +a.children[2].textContent - +b.children[2].textContent;
  });

  tbody.append(...rows);
});

salaryBtn.addEventListener('click', () => {
  const rows = getRows();

  rows.sort((a, b) => {
    const valueA = +a.children[3].textContent.replace(/[^\d]/g, '');
    const valueB = +b.children[3].textContent.replace(/[^\d]/g, '');

    return valueA - valueB;
  });
  tbody.append(...rows);
});
