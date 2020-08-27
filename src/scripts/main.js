'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const employees = tbody.children;
const headings = thead.firstElementChild.children;
const convertNeeded = ['Salary'];

[...headings].map((heading, index) => {
  heading.addEventListener('click', () => {
    const sorted = [...employees].sort((a, b) => {
      const first = a.children[index].innerHTML;
      const second = b.children[index].innerHTML;

      if (convertNeeded.includes(heading.textContent)) {
        return (convertCurrencyToNum(first) - convertCurrencyToNum(second));
      }

      return first.localeCompare(second);
    });

    tbody.append(...sorted);
  });
});

function convertCurrencyToNum(number) {
  return +number.replace(/[$,]+/g, '');
}
