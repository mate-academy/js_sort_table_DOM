'use strict';

function parseSalary(sum) {
  return +sum.slice(1).split(',').join('');
}

const head = document.querySelector('thead');
const rows = [...document.querySelectorAll('tbody>tr')];
const body = document.querySelector('tbody');

head.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') {
    return;
  }

  const index = e.target.cellIndex;

  if (index < 2) {
    rows.sort((a, b) => {
      const aText = a.children[index].textContent;
      const bText = b.children[index].textContent;

      return aText.localeCompare(bText);
    });
  }

  if (index === 2) {
    rows.sort((a, b) => {
      const ageA = +a.children[index].textContent;
      const ageB = +b.children[index].textContent;

      return ageA - ageB;
    });
  }

  if (index === 3) {
    rows.sort((a, b) => {
      const aSalary = parseSalary(a.children[index].textContent);
      const bSalary = parseSalary(b.children[index].textContent);

      return aSalary - bSalary;
    });
  }

  body.innerHTML = '';
  body.append(...rows);
});
