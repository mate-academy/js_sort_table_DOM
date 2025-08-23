'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
const tableTitles = thead.querySelectorAll('th');

const allRows = tbody.querySelectorAll('tr');
console.log(allRows);
// console.log(firsttr.children);
const arrb = Array.from(allRows);
console.log(arrb);

thead.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TH') return;
  const th = e.target.textContent;
  console.log(e.target.textContent);

  if (e.target.textContent === 'Name') {
    arrb.sort((a, b) => {
      if (
        a.children[0].textContent.toUpperCase() >
        b.children[0].textContent.toUpperCase()
      )
        return 1;
      if (
        a.children[0].textContent.toUpperCase() <
        b.children[0].textContent.toUpperCase()
      )
        return -1;
      return 0;
    });
  }

  if (e.target.textContent === 'Position') {
    arrb.sort((a, b) => {
      if (
        a.children[1].textContent.toUpperCase() >
        b.children[1].textContent.toUpperCase()
      )
        return 1;
      if (
        a.children[1].textContent.toUpperCase() <
        b.children[1].textContent.toUpperCase()
      )
        return -1;
      return 0;
    });
  }

  if (e.target.textContent === 'Age') {
    arrb.sort((a, b) => a.children[2].textContent - b.children[2].textContent);
  }

  if (e.target.textContent === 'Salary') {
    arrb.sort((a, b) => {
      const sum1 = Number(a.children[3].textContent.replace(/[$,]/g, ''));
      const sum2 = Number(b.children[3].textContent.replace(/[$,]/g, ''));

      return sum1 - sum2;
    });
  }
  tbody.innerHTML = '';
  tbody.append(...arrb);
  // console.log(arrb);
});
