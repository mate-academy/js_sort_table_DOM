'use strict';

const thead = document.querySelector('thead tr');

thead.addEventListener('click', (event) => {
  const list = document.querySelector('tbody');
  const rows = [...document.querySelectorAll('tbody tr')];
  const point = event.target.closest('th');
  const index = [...thead.children].indexOf(point);

  if (index === 0 || index === 1) {
    rows.sort((a, b) =>
      a.children[index].innerHTML.localeCompare(b.children[index].innerHTML)
    );
  }

  if (index === 2 || index === 3) {
    rows.sort((a, b) =>
      a.children[index].innerHTML.replace(/\D/g, '')
      - b.children[index].innerHTML.replace(/\D/g, '')
    );
  }

  if (!point.hasAttribute('data-sorted')) {
    list.append(...rows);
    point.setAttribute('data-sorted', '1');
  } else {
    list.append(...rows.reverse());
    point.removeAttribute('data-sorted');
  }
});
