'use strict';

// write code here

function toNumber(Str) {
  const numb = +Str.replace(/\D/g, '');

  return numb;
}

const sortAll = (e) => {
  const arraySort = [...listElements].sort((a, b) => {
    if (e.target === document.querySelectorAll('th')[0]) {
      const strA = a.firstElementChild.textContent;
      const strB = b.firstElementChild.textContent;

      return strA.localeCompare(strB);
    }

    if (e.target === document.querySelectorAll('th')[1]) {
      const strA = a.firstElementChild.nextElementSibling.textContent;
      const strB = b.firstElementChild.nextElementSibling.textContent;

      return strA.localeCompare(strB);
    }

    if (e.target === document.querySelectorAll('th')[2]) {
      return a.lastElementChild.previousElementSibling.textContent
      - b.lastElementChild.previousElementSibling.textContent;
    }

    if (e.target === document.querySelectorAll('th')[3]) {
      const salaryA = toNumber(a.lastElementChild.textContent);
      const salaryB = toNumber(b.lastElementChild.textContent);

      return salaryA - salaryB;
    }
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

const listElements = document.querySelector('tbody').children;

document.querySelectorAll('th')[0].addEventListener('click', sortAll);

document.querySelectorAll('th')[1].addEventListener('click', sortAll);

document.querySelectorAll('th')[2].addEventListener('click', sortAll);

document.querySelectorAll('th')[3].addEventListener('click', sortAll);
