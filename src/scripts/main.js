'use strict';

// write code here

function toNumber(Str) {
  const numb = +Str.replace(/\D/g, '');

  return numb;
}

function newTable(array) {
  document.querySelector('tbody').innerHTML = '';

  for (const item of array) {
    document.querySelector('tbody').innerHTML += `
      <tr>
      <td>${item.firstElementChild.textContent}</td>
      <td>${item.firstElementChild.nextElementSibling.textContent}</td>
      <td>${item.lastElementChild.previousElementSibling.textContent}</td>
      <td>${item.lastElementChild.textContent}</td>
      </tr>
    `;
  }
}

const sortName = () => {
  const arraySort = [...listElements].sort((a, b) => {
    const strA = a.firstElementChild.textContent;
    const strB = b.firstElementChild.textContent;

    return strA.localeCompare(strB);
  });

  newTable(arraySort);
};

const sortPosition = () => {
  const arraySort = [...listElements].sort((a, b) => {
    const strA = a.firstElementChild.nextElementSibling.textContent;
    const strB = b.firstElementChild.nextElementSibling.textContent;

    return strA.localeCompare(strB);
  });

  newTable(arraySort);
};

const sortAge = () => {
  const arraySort = [...listElements].sort((a, b) =>
    a.lastElementChild.previousElementSibling.textContent
    - b.lastElementChild.previousElementSibling.textContent);

  newTable(arraySort);
};

const sortSalary = () => {
  const arraySort = [...listElements].sort((a, b) => {
    const salaryA = toNumber(a.lastElementChild.textContent);
    const salaryB = toNumber(b.lastElementChild.textContent);

    return salaryA - salaryB;
  });

  newTable(arraySort);
};

const listElements = document.querySelector('tbody').children;

const title1 = document.querySelectorAll('th')[0];

const title2 = document.querySelectorAll('th')[1];

const title3 = document.querySelectorAll('th')[2];

const title4 = document.querySelectorAll('th')[3];

title1.addEventListener('click', sortName);

title2.addEventListener('click', sortPosition);

title3.addEventListener('click', sortAge);

title4.addEventListener('click', sortSalary);
