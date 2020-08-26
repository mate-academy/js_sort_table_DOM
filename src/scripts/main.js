'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const employees = tbody.children;
const headings = thead.firstElementChild.children;

[...headings].map((heading, index) =>
  heading.addEventListener('click', () => {
    const sorted = [...employees].sort((a, b) => {
      const first = a.children[index].innerHTML;
      const second = b.children[index].innerHTML;

      return (index === 3)
        ? convertCurrencyToNumber(first) - convertCurrencyToNumber(second)
        : first.localeCompare(second);
    });

    tbody.append(...sorted);
  })
);

function convertCurrencyToNumber(number) {
  return +number.replace(/[$,]+/g, '');
}
