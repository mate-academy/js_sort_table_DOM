'use strict';

const headers = [...document.querySelectorAll('th')];

headers.forEach((columnName) => {
  columnName.addEventListener('click', (e) => {
    if (columnName.textContent === 'Name') {
      const names = [...document.querySelectorAll('tr')]
        .map((row) => {
          return { name: row.children[0].textContent, element: row };
        })
        .filter((obj) => obj.name !== 'Name');

      names.sort((a, b) => a.name.localeCompare(b.name));

      const body = document.querySelector('tbody');

      body.innerHTML = '';

      names.forEach((namee) => {
        body.appendChild(namee.element);
      });
    }

    if (columnName.textContent === 'Position') {
      const positions = [...document.querySelectorAll('tr')]
        .map((row) => {
          return { position: row.children[1].textContent, element: row };
        })
        .filter((obj) => obj.position !== 'Position');

      positions.sort((a, b) => a.position.localeCompare(b.position));

      const body = document.querySelector('tbody');

      body.innerHTML = '';

      positions.forEach((position) => {
        body.appendChild(position.element);
      });
    }

    if (columnName.textContent === 'Age') {
      const ages = [...document.querySelectorAll('tr')]
        .map((row) => {
          return { age: row.children[2].textContent, element: row };
        })
        .filter((obj) => obj.age !== 'Age');

      ages.sort((a, b) => a.age - b.age);

      const body = document.querySelector('tbody');

      body.innerHTML = '';

      ages.forEach((age) => {
        body.appendChild(age.element);
      });
    }

    if (columnName.textContent === 'Salary') {
      const salarys = [...document.querySelectorAll('tr')]
        .map((row) => {
          return { salary: row.children[3].textContent, element: row };
        })
        .filter((obj) => obj.salary !== 'Salary');

      salarys.sort(
        (a, b) =>
          Number(a.salary.slice(1).split(',').join('')) -
          Number(b.salary.slice(1).split(',').join('')),
      );

      const body = document.querySelector('tbody');

      body.innerHTML = '';

      salarys.forEach((salary) => {
        body.appendChild(salary.element);
      });
    }
  });
});
