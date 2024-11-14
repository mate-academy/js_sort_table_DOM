'use strict';

// write code here

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

const th = Array.from(document.querySelectorAll('thead > tr > th'));

thead.addEventListener('click', (e) => {
  const index = th.indexOf(e.target);

  const rowSort = [...tbody.rows].sort((a, b) => {
    return a.children[index].innerText.localeCompare(
      b.children[index].innerText,
    );
  });

  tbody.append(...rowSort);
});
