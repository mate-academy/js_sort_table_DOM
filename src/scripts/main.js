'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const listSalary = document.querySelector('tbody').children;
const SALARY = 'Salary';

thead.addEventListener('click', (e) => {
  if (e.target.textContent === SALARY) {
    const sorted = sortListForSaalry(listSalary);

    tbody.innerHTML = '';

    sorted.forEach((elm) => {
      tbody.appendChild(elm);
    });
  }
});

function sortListForSaalry(colect) {
  const out = Array.from(colect).sort((a, b) => {
    return (
      +cleanCurrency(b.children[b.children.length - 1].textContent) -
      +cleanCurrency(a.children[a.children.length - 1].textContent)
    );
  });

  return out;
}

function cleanCurrency(input) {
  return input.replace(/[$,]/g, '');
}
