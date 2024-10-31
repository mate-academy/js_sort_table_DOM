'use strict';

const names = document.querySelector('thead > tr > th:nth-child(1)');
const position = document.querySelector('thead > tr > th:nth-child(2)');
const age = document.querySelector('thead > tr > th:nth-child(3)');
const salary = document.querySelector('thead > tr > th:nth-child(4)');
const tableBody = Array.from(document.querySelectorAll('tbody > tr'));
const tbody = document.querySelector('tbody');

names.addEventListener('click', (e) => {
  e.stopPropagation();

  tableBody.sort((a, b) => {
    const textA = a.querySelector('td:nth-child(1)').textContent.trim();
    const textB = b.querySelector('td:nth-child(1)').textContent.trim();

    return textA.localeCompare(textB);
  });

  tbody.innerHTML = '';
  tableBody.forEach((row) => tbody.appendChild(row));
});

position.addEventListener('click', (e) => {
  e.stopPropagation();

  tableBody.sort((a, b) => {
    const textA = a.querySelector('td:nth-child(2)').textContent.trim();
    const textB = b.querySelector('td:nth-child(2)').textContent.trim();

    return textA.localeCompare(textB);
  });

  tbody.innerHTML = '';
  tableBody.forEach((row) => tbody.appendChild(row));
});

age.addEventListener('click', (e) => {
  // e.stopPropagation();

  tableBody.sort((a, b) => {
    const ageA = a.querySelector('td:nth-child(3)').textContent.trim();
    const ageB = b.querySelector('td:nth-child(3)').textContent.trim();

    return ageA - ageB;
  });

  tbody.innerHTML = '';
  tableBody.forEach((row) => tbody.appendChild(row));
});

salary.addEventListener('click', (e) => {
  e.stopPropagation();

  tableBody.sort((a, b) => {
    const textA = a.querySelector('td:nth-child(4)').textContent.trim();
    const textB = b.querySelector('td:nth-child(4)').textContent.trim();

    const salaryA = +textA.slice(1).split(',').join('');
    const salaryB = +textB.slice(1).split(',').join('');

    return salaryA - salaryB;
  });

  tbody.innerHTML = '';
  tableBody.forEach((row) => tbody.appendChild(row));
});
