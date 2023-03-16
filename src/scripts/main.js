'use strict';

const sortBy = document.querySelector('tr');

function toNum(element) {
  return +element.innerText.slice(1).replaceAll(',', '');
}

sortBy.addEventListener('click', el => {
  const columns = el.target.parentNode.children;

  for (let i = 0; i < columns.length; i++) {
    if (el.target.parentNode.children[i].innerText === el.target.innerText) {
      const parentEl = document.querySelector('tbody');
      const sortsEl = parentEl.querySelectorAll('tr');

      let sorted;

      el.target.parentNode.children[i].innerText === 'Salary'
        ? sorted = [...sortsEl].sort((el1, el2) =>
          toNum(el1.children[i]) - toNum(el2.children[i]))
        : sorted = [...sortsEl].sort((el1, el2) =>
          el1.children[i].innerText.localeCompare(el2.children[i].innerText));

      parentEl.append(...sorted);
    }
  }
});
