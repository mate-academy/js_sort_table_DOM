'use strict';

const titles = [...document.querySelectorAll('thead > tr > th')];
const listItems = [...document.querySelectorAll('tbody > tr')];
const tbody = document.querySelector('tbody');

titles.forEach(title => {
  title.addEventListener('click', () => {
    const i = titles.indexOf(title);

    const sorted = [...listItems].sort((a, b) => {
      if (title.textContent === 'Salary') {
        const prev = +a.children[i].textContent.replace('$', '')
          .split(',').join('');
        const curr = +b.children[i].textContent.replace('$', '')
          .split(',').join('');

        return prev - curr;
      }

      return a.children[i].textContent.localeCompare(b.children[i].textContent);
    });

    tbody.append(...sorted);
  });
});
