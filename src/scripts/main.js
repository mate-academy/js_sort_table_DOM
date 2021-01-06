'use strict';

// write code here

const people = document.querySelector('tbody').children;

const titles = document.querySelectorAll('thead > tr > th');
const [fullName, position, age, salary] = titles;

fullName.classList.add('full-name');
position.classList.add('position');
age.classList.add('age');
salary.classList.add('salary');

const header = document.querySelector('thead > tr');

header.addEventListener('click', (e) => {
  if (e.target.classList.contains('full-name')) {
    const sortedByName = [...people]
      .sort((a, b) => a.cells[0].innerText.localeCompare(b.cells[0].innerText));

    document.querySelector('tbody').append(...sortedByName);
  }

  if (e.target.classList.contains('position')) {
    const sortedByPosition = [...people]
      .sort((a, b) => a.cells[1].innerText.localeCompare(b.cells[1].innerText));

    document.querySelector('tbody').append(...sortedByPosition);
  }

  if (e.target.classList.contains('age')) {
    const sortedByAge = [...people]
      .sort((a, b) => +a.cells[2].innerText - +b.cells[2].innerText);

    document.querySelector('tbody').append(...sortedByAge);
  }

  if (e.target.classList.contains('salary')) {
    const sortedBySalary = [...people].sort((a, b) => +(a.cells[3].innerText)
      .replace(/\$/, '').replace(/,/, '') - +(b.cells[3].innerText)
      .replace(/\$/, '').replace(/,/, ''));

    document.querySelector('tbody').append(...sortedBySalary);
  }
});
