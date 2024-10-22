'use strict';

const th = [...document.querySelectorAll('thead th')].map(
  (elem) => elem.textContent,
);

document.addEventListener('click', (e) => {
  const elem = e.target;

  if (elem.matches('th')) {
    const indexElemSort = th.indexOf(elem.textContent);
    const tr = [...document.querySelectorAll('tbody tr')];

    const arraySort = tr.sort((row1, row2) => {
      const value1 = row1.children[indexElemSort].textContent;
      const value2 = row2.children[indexElemSort].textContent;

      if (indexElemSort === 2 || indexElemSort === 3) {
        const num1 =
          indexElemSort === 3
            ? parseInt(value1.replace(/[^0-9.-]+/g, ''))
            : parseInt(value1);
        const num2 =
          indexElemSort === 3
            ? parseInt(value2.replace(/[^0-9.-]+/g, ''))
            : parseInt(value2);

        return num1 - num2;
      }

      return value1.localeCompare(value2);
    });

    const tbody = document.querySelector('tbody');

    tbody.innerHTML = '';

    arraySort.forEach((newElem) => {
      tbody.appendChild(newElem);
    });
  }
});
