'use strict';

const thead = document.querySelector('thead').children[0];
const colHead = thead.innerText.split('\t');

thead.addEventListener('click', (click) => {
  if (click.target.tagName !== 'TH') {
    return false;
  }

  const index = colHead.findIndex((colName) =>
    colName === click.target.innerText);

  const rows = [...document.querySelectorAll('tbody tr')];

  const sort = (tr1, tr2) => {
    const text1 = tr1.children[index].innerText;
    const text2 = tr2.children[index].innerText;

    switch (index) {
      case 0:
      case 1:
        return text1.localeCompare(text2);
      case 2:
        return Number(text1) - Number(text2);
      case 3:
        const salary1 = text1.split(',').join('').slice(1);
        const salary2 = text2.split(',').join('').slice(1);

        return Number(salary1) - Number(salary2);
    }
  };

  rows.sort(sort);

  document.querySelector('tbody').innerHTML = `
    ${rows.map((tr) => tr.outerHTML).join('\n')}
  `;
});
