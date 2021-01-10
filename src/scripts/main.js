'use strict';

const list = document.querySelectorAll('tbody > tr');
const headers = document.querySelectorAll('thead > tr > th');

headers.forEach(item => {
  item.addEventListener('click', sorted);
});

function sorted(ev) {
  if (ev.target.innerText === 'Name') {
    const sortedElements = [...list].sort((a, b) => {
      const prev = a.children[0].textContent;
      const next = b.children[0].textContent;

      return prev.localeCompare(next);
    });

    list.forEach(x => x.remove());

    const tbody = document.querySelector('tbody');

    sortedElements.forEach(x => tbody.append(x));
  }

  if (ev.target.innerText === 'Position') {
    const sortedElements = [...list].sort((a, b) => {
      const prev = a.children[1].textContent;
      const next = b.children[1].textContent;

      return prev.localeCompare(next);
    });

    list.forEach(x => x.remove());

    const tbody = document.querySelector('tbody');

    sortedElements.forEach(x => tbody.append(x));
  }

  if (ev.target.innerText === 'Age') {
    const sortedElements = [...list].sort((a, b) => {
      const prev = parseFloat(a.children[2].textContent);
      const next = parseFloat(b.children[2].textContent);

      return next - prev;
    });

    list.forEach(x => x.remove());

    const tbody = document.querySelector('tbody');

    sortedElements.forEach(x => tbody.append(x));
  }

  if (ev.target.innerText === 'Salary') {
    const sortedElements = [...list].sort((a, b) => {
      const prev = parseFloat(a.children[3].textContent.replace(/\D/, ''));
      const next = parseFloat(b.children[3].textContent.replace(/\D/, ''));

      return next - prev;
    });

    list.forEach(x => x.remove());

    const tbody = document.querySelector('tbody');

    sortedElements.forEach(x => tbody.append(x));
  }
}
