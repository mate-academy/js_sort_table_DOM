'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const arrChildren = [...tbody.children];

thead.addEventListener('click', (e) => {
  switch (e.target.innerText) {
    case 'Name':
      const arrName = arrChildren.sort((a, b) => {
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      });

      tbody.append(...arrName);
      break;
    case 'Position':
      const arrPos = arrChildren.sort((a, b) => {
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      });

      tbody.append(...arrPos);
      break;
    case 'Age':
      const arrAge = arrChildren.sort((a, b) => {
        return a.children[2].innerText.localeCompare(b.children[2].innerText);
      });

      tbody.append(...arrAge);
      break;
    case 'Salary':
      const arrSal = arrChildren.sort((a, b) => {
        const salaryA = +a.children[3].innerText.replace(/[$,]/g, '');
        const salaryB = +b.children[3].innerText.replace(/[$,]/g, '');

        return salaryA - salaryB;
      });

      tbody.append(...arrSal);
      break;
  }
});
