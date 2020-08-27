'use strict';

const tbody = document.querySelector('tbody');
const row = tbody.querySelectorAll('tr');

[...row].forEach(trtb => {
  trtb.children[0].className = 'name';
  trtb.children[1].className = 'position';
  trtb.children[2].className = 'age';
  trtb.children[3].className = 'salary';
});

const thead = document.querySelector('thead');
const tr = thead.querySelectorAll('tr');

[...tr].forEach(trth => {
  trth.children[0].id = 'name';
  trth.children[1].id = 'position';
  trth.children[2].id = 'age';
  trth.children[3].id = 'salary';
});

thead.addEventListener('click', (event) => {
  let sortTable;

  if (event.target === document.querySelector('#salary')) {
    sortTable = [...row].sort((a, b) => {
      const aSalary = a.children[3].innerText.replace(/[^0-9]/g, '');
      const bSalary = b.children[3].innerText.replace(/[^0-9]/g, '');

      return aSalary - bSalary;
    });
  }

  if (event.target === document.querySelector('#age')) {
    sortTable = [...row].sort((a, b) => {
      const aAge = +a.children[2].innerText;
      const bAge = +b.children[2].innerText;

      return aAge - bAge;
    });
  }

  if (event.target === document.querySelector('#position')) {
    sortTable = [...row].sort((a, b) => {
      const aPosition = a.children[1].innerText;
      const bPosition = b.children[1].innerText;

      return aPosition.localeCompare(bPosition);
    });
  }

  if (event.target === document.querySelector('#name')) {
    sortTable = [...row].sort((a, b) => {
      const aName = a.children[0].innerText;
      const bName = b.children[0].innerText;

      return aName.localeCompare(bName);
    });
  }

  tbody.append(...sortTable);
});
