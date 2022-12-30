'use strict';

const table = document.querySelector('table');
const tr = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');
const trSel = [...tr].slice(1, tr.length - 1);

function toNumber(string) {
  const number = string.slice(1).split('').filter(el => el !== ',').join('');

  return +number;
}

const func = (ev) => {
  tbody.innerHTML = '';

  if (ev.target.innerText === 'Name') {
    trSel.sort((a, b) =>
      a.children[0].textContent.localeCompare(b.children[0].textContent)
    );
  }

  if (ev.target.innerText === 'Position') {
    trSel.sort((a, b) =>
      a.children[1].textContent.localeCompare(b.children[1].textContent)
    );
  }

  if (ev.target.innerText === 'Age') {
    trSel.sort((a, b) =>
      a.children[2].textContent - b.children[2].textContent
    );
  }

  if (ev.target.innerText === 'Salary') {
    trSel.sort((a, b) =>
      toNumber(a.children[3].textContent) - toNumber(b.children[3].textContent)
    );
  }

  for (let row = 0; row < trSel.length; row++) {
    tbody.append(trSel[row]);
  }
};

table.addEventListener('click', func);
