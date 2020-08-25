'use strict';

const tableBody = document.querySelector('tbody');

[...document.querySelectorAll('th')].map((th, index) => {
  th.addEventListener('click', () => {
    const inputs = [...tableBody.querySelectorAll('tr')].sort((a, b) => {
      let paramA = a.children[index].innerHTML.replace(/[$,]/g, '');
      let paramB = b.children[index].innerHTML.replace(/[$,]/g, '');

      if (!isNaN(paramA)) {
        paramA = +paramA;
        paramB = +paramB;
      };

      return paramA > paramB ? 1 : -1;
    });

    tableBody.append(...inputs);
  });
});
