'use strict';

const list = document.querySelectorAll('tbody > tr');
const headers = document.querySelectorAll('thead > tr > th');

headers.forEach(item => {
  item.addEventListener('click', eventListener);
});

function eventListener(ev) {
  let sorter = null;

  switch (ev.target.innerText) {
    case 'Name':
      sorter = (a, b) => {
        const prev = a.children[0].textContent;
        const next = b.children[0].textContent;

        return prev.localeCompare(next);
      };
      break;

    case 'Position':
      sorter = (a, b) => {
        const prev = a.children[1].textContent;
        const next = b.children[1].textContent;

        return prev.localeCompare(next);
      };
      break;

    case 'Age':
      sorter = (a, b) => {
        const prev = parseFloat(a.children[2].textContent);
        const next = parseFloat(b.children[2].textContent);

        return prev - next;
      };
      break;

    case 'Salary':
      sorter = (a, b) => {
        const prev = parseFloat(a.children[3].textContent.replace(/\D/, ''));
        const next = parseFloat(b.children[3].textContent.replace(/\D/, ''));

        return prev - next;
      };
      break;
  }

  list.forEach(x => x.remove());

  const tbody = document.querySelector('tbody');

  const sortedElements = [...list].sort(sorter);

  sortedElements.forEach(x => tbody.append(x));
}
