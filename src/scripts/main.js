'use strict';

const articles = document.querySelectorAll('thead > tr > th');
const header = document.querySelector('thead');
const list = document.querySelector('tbody');
const items = [...list.children];

header.addEventListener('click', (fact) => {
  switch (fact.target) {
    case articles[0]:
      sortTable(items, 0);
      break;

    case articles[1]:
      sortTable(items, 1);
      break;

    case articles[2]:
      sortTable(items, 2);
      break;

    case articles[3]:
      sortTable(items, 3);
      break;
  }

  for (let i = 0; i < items.length; ++i) {
    list.appendChild(items[i]);
  }
});

function sortTable(array, i) {
  if (i < 3) {
    array.sort(function(a, b) {
      const A = a.children[i].innerText;
      const B = b.children[i].innerText;

      return A.localeCompare(B);
    });
  } else {
    array.sort(function(a, b) {
      const A = +a.children[i].innerText.replace(/[$,]/g, '');
      const B = +b.children[i].innerText.replace(/[$,]/g, '');

      return A - B;
    });
  }
}
