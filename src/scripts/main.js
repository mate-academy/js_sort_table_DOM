'use strict';

// write code here
const tr = [...document.querySelectorAll('tr')].slice(1, -1);
const first = document.querySelector('tr');
const tb = document.querySelector('tbody');

const convertNum = salary => +salary.slice(1).split(',').join('');

first.addEventListener('click', e => {
  if (e.target.innerText === 'Name') {
    const sort = tr.sort((a, b) => {
      return a.children[0].innerText.localeCompare(b.children[0].innerText);
    });

    tb.append(...sort);
  }

  if (e.target.innerText === 'Position') {
    const sort = tr.sort((a, b) => {
      return a.children[1].innerText.localeCompare(b.children[1].innerText);
    });

    tb.append(...sort);
  }

  if (e.target.innerText === 'Age') {
    const sort = tr.sort((a, b) => {
      return a.children[2].innerText - b.children[2].innerText;
    });

    tb.append(...sort);
  }

  if (e.target.innerText === 'Salary') {
    const sort = tr.sort((a, b) => {
      return convertNum(a.children[3].innerText)
    - convertNum(b.children[3].innerText);
    });

    tb.append(...sort);
  }
});
