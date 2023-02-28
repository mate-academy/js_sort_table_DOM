'use strict';

const thead = document.querySelector('thead');
const headLinks = [...thead.children[0].children];
const tbody = document.querySelector('tbody');
const bodyData = [...tbody.children];

headLinks[0].setAttribute('data-sort', 'string');
headLinks[1].setAttribute('data-sort', 'string');
headLinks[2].setAttribute('data-sort', 'number');
headLinks[3].setAttribute('data-sort', 'number');

headLinks.forEach((el, i) => el.addEventListener('click', () => {
  bodyData.sort((a, b) => {
    return (
      (el.dataset.sort === 'string')
        ? (a.children[i].textContent).localeCompare(b.children[i].textContent)
        : (+a.children[i].textContent.replace(/\D/g, ''))
        - (+b.children[i].textContent.replace(/\D/g, ''))
    );
  });

  bodyData.forEach(element => tbody.append(element));
}));
