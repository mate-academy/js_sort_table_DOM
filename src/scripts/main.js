'use strict';

const thead = document.querySelector('thead');

const buttons = thead.querySelectorAll('th');

buttons.forEach((btn, index) => {
  btn.addEventListener('click', () => toSorting(index));
});

const names = [];
const position = [];
const ages = [];
const salaries = [];

function getProperties() {
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((item) => {
    const cells = item.querySelectorAll('td');

    names.push(cells[0].textContent);
    position.push(cells[1].textContent);
    ages.push(cells[2].textContent);
    salaries.push(cells[3].textContent);
  });
}

function toSorting(index) {
  if (index === 0) {
    names.sort((a, b) => a.localeCompare(b));
  } else if (index === 1) {
    position.sort((a, b) => a.localeCompare(b));
  } else if (index === 2) {
    ages.sort((a, b) => a - b);
  } else if (index === 3) {
    const convertSalaryToNum = salaries.map((salary) => {
      return parseInt(salary.replace(/[^\d.-]/g, ''));
    });

    convertSalaryToNum.sort((a, b) => a - b);
    salaries.length = 0;
    salaries.push(...convertSalaryToNum);
  }

  updateList();
}

function updateList() {
  const rows = document.querySelectorAll('tbody tr');

  rows.forEach((row, index) => {
    const cells = row.querySelectorAll('td');

    cells[0].textContent = names[index] || cells[0].textContent;
    cells[1].textContent = position[index] || cells[1].textContent;
    cells[2].textContent = ages[index] || cells[2].textContent;
    cells[3].textContent = salaries[index] || cells[3].textContent;
  });
}

getProperties();
