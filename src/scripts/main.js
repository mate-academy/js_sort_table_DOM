'use strict';

const head = document.querySelectorAll('thead th');
const footer = document.querySelectorAll('tfoot th');

function sortTablet(i) {
  const tbody = document.querySelector('tbody');
  const body = [...document.querySelectorAll('tbody tr')];

  if (isNaN(body[i].children.textContent)) {
    body.sort((a, b) => {
      const textA = a.children[i].textContent.replace(/[^a-zA-Z]/g, '');
      const textB = b.children[i].textContent.replace(/[^a-zA-Z]/g, '');

      return textA.localeCompare(textB);
    });
  }

  body.sort(
    (a, b) =>
      a.children[i].textContent.replace(/[^0-9.]/g, '') -
      b.children[i].textContent.replace(/[^0-9.]/g, ''),
  );

  body.forEach((el) => tbody.append(el));
}

function sortTabletFooter(i) {
  const tbody = document.querySelector('tbody');
  const body = [...document.querySelectorAll('tbody tr')];

  if (isNaN(body[i].children.textContent)) {
    body.sort((a, b) => {
      const textA = a.children[i].textContent.replace(/[^a-zA-Z]/g, '');
      const textB = b.children[i].textContent.replace(/[^a-zA-Z]/g, '');

      return textB.localeCompare(textA);
    });
  }

  body.sort(
    (a, b) =>
      b.children[i].textContent.replace(/[^0-9.]/g, '') -
      a.children[i].textContent.replace(/[^0-9.]/g, ''),
  );

  body.forEach((el) => tbody.append(el));
}

head.forEach((el, index) => {
  el.addEventListener('click', () => {
    sortTablet(index);
  });
});

footer.forEach((el, index) => {
  el.addEventListener('click', () => {
    sortTabletFooter(index);
  });
});
