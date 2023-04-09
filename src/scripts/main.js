'use strict';

const head = document.querySelector('tr');

const headers = document.querySelectorAll('th');

const tbody = document.querySelector('tbody');

const tbodyItems = [...tbody.children];

head.addEventListener('click', e => {
  const indexOfHeader = [...headers].indexOf(e.target);

  tbodyItems.sort((a, b) => {
    const firstEl = a.children[indexOfHeader].innerText;
    const secondEl = b.children[indexOfHeader].innerText;

    return firstEl.localeCompare(secondEl);
  });

  for (const item of tbodyItems) {
    tbody.append(item);
  }
});
