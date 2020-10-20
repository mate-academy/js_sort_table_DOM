'use strict';

const nameHeader = document.querySelector('thead th:first-child');
const positionHeader = document.querySelector('thead th:nth-child(2)');
const ageHeader = document.querySelector('thead th:nth-child(3)');
const salaryHeader = document.querySelector('thead th:nth-child(4)');

const body = document.querySelector('tbody');

const comparatorForName = (a, b) => {
  const first = a.children[0].textContent;
  const second = b.children[0].textContent;

  return first.localeCompare(second);
};

const comparatorForPosition = (a, b) => {
  const first = a.children[1].textContent;
  const second = b.children[1].textContent;

  return first.localeCompare(second);
};

const comparatorForAge = (a, b) => {
  const first = a.children[2].textContent;
  const second = b.children[2].textContent;

  return second - first;
};

const comparatorForSalary = (a, b) => {
  const first = a.children[3].textContent.replace(/\$|,/g, '');
  const second = b.children[3].textContent.replace(/\$|,/g, '');

  return second - first;
};

nameHeader.addEventListener('click', () => {
  const sortedByName = [...body.children].sort(comparatorForName);

  body.innerHTML = '';
  sortedByName.forEach(element => body.appendChild(element));
});

positionHeader.addEventListener('click', () => {
  const sortedByPosition = [...body.children].sort(comparatorForPosition);

  body.innerHTML = '';
  sortedByPosition.forEach(element => body.appendChild(element));
});

ageHeader.addEventListener('click', () => {
  const sortedByAge = [...body.children].sort(comparatorForAge);

  body.innerHTML = '';
  sortedByAge.forEach(element => body.appendChild(element));
});

salaryHeader.addEventListener('click', () => {
  const sortedBySalary = [...body.children].sort(comparatorForSalary);

  body.innerHTML = '';
  sortedBySalary.forEach(element => body.appendChild(element));
});
