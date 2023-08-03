'use strict';

const thead = document.querySelector('thead').children[0];

thead.addEventListener('click', e => {
  const target = e.target;

  if (target.tagName !== 'TH') {
    return;
  }

  const sortType = target.innerText;
  const data = Array.from(document.querySelectorAll('tbody tr'));

  data.sort((a, b) => {
    switch (sortType) {
      case 'Name':
        return a.children[0].innerText.localeCompare(b.children[0].innerText);
      case 'Position':
        return a.children[1].innerText.localeCompare(b.children[1].innerText);
      case 'Age':
        return parseInt(a.children[2].innerText) - parseInt(
          b.children[2].innerText
        );
      case 'Salary':
        const aSalary = parseInt(
          a.children[3].innerText.slice(1).replace(',', '')
        );

        const bSalary = parseInt(
          b.children[3].innerText.slice(1).replace(',', '')
        );

        return aSalary - bSalary;
      default:
        return 0;
    }
  });

  document.querySelector('tbody').innerHTML = '';

  data.forEach(item => {
    document.querySelector('tbody').appendChild(item);
  });
});
