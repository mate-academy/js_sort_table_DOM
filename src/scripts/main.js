'use strict';

const list = document.querySelectorAll('tbody > tr');
const headers = document.querySelectorAll('thead > tr > th');

headers.forEach(item => {
  item.addEventListener('click', sorted);
});

function sorted(ev) {
  let sorter = null;

  if (ev.target.innerText === 'Name') {
    sorter = (a, b) => {
      const prev = a.children[0].textContent;
      const next = b.children[0].textContent;

      return prev.localeCompare(next);
    };
  }

  if (ev.target.innerText === 'Position') {
    sorter = (a, b) => {
      const prev = a.children[1].textContent;
      const next = b.children[1].textContent;

      return prev.localeCompare(next);
    };
  }

  if (ev.target.innerText === 'Age') {
    sorter = (a, b) => {
      const prev = parseFloat(a.children[2].textContent);
      const next = parseFloat(b.children[2].textContent);

      return prev - next;
    };
  }

  if (ev.target.innerText === 'Salary') {
    sorter = (a, b) => {
      const prev = parseFloat(a.children[3].textContent.replace(/\D/, ''));
      const next = parseFloat(b.children[3].textContent.replace(/\D/, ''));

      return prev - next;
    };
  }

  list.forEach(x => x.remove());

  const tbody = document.querySelector('tbody');

  const sortedElements = [...list].sort(sorter);

  sortedElements.forEach(x => tbody.append(x));
}
