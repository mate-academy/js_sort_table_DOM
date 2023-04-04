'use strict';

// write code here

function toNumber(Str) {
  const numb = +Str.replace(/\D/g, '');

  return numb;
}

const sortSalary = () => {
  const listElements = document.querySelector('tbody').children;

  const arraySort = [...listElements].sort((a, b) => {
    const salaryA = toNumber(a.lastElementChild.textContent);
    const salaryB = toNumber(b.lastElementChild.textContent);

    return salaryA - salaryB;
  });

  document.querySelector('tbody').innerHTML = '';

  for (const item of arraySort) {
    document.querySelector('tbody').innerHTML += `
      <tr>
      <td>${item.firstElementChild.textContent}</td>
      <td>${item.firstElementChild.nextElementSibling.textContent}</td>
      <td>${item.lastElementChild.previousElementSibling.textContent}</td>
      <td>${item.lastElementChild.textContent}</td>
      </tr>
    `;
  }
};

const title1 = document.querySelectorAll('th')[0];

const title2 = document.querySelectorAll('th')[1];

const title3 = document.querySelectorAll('th')[2];

const title4 = document.querySelectorAll('th')[3];

title1.addEventListener('click', sortSalary);

title2.addEventListener('click', sortSalary);

title3.addEventListener('click', sortSalary);

title4.addEventListener('click', sortSalary);
