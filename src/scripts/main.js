'use strict';

const sortBy = document.querySelector('tr');

function toNum(element) {
  return +element.innerText.slice(1).replaceAll(',', '');
}

function toNumAge(element) {
  return +element.innerText;
}

sortBy.addEventListener('click', e => {
  const columns = e.target.parentNode.children;

  for (let i = 0; i < columns.length; i++) {
    if (e.target.parentNode.children[i].innerText === e.target.innerText) {
      const parents = document.querySelector('tbody');
      const sort = parents.querySelectorAll('tr');
      let sorted;

      switch (e.target.parentNode.children[i].innerText) {
        case 'Salary':
          sorted = [...sort].sort((a, b) =>
            toNum(a.children[i]) - toNum(b.children[i]));
          break;

        case 'Age':
          sorted = [...sort].sort((a, b) =>
            toNumAge(a.children[i]) - toNumAge(b.children[i]));
          break;

        default:
          sorted = [...sort].sort((a, b) =>
            a.children[i].innerText.localeCompare(b.children[i].innerText));
      }

      parents.append(...sorted);
    }
  }
});
