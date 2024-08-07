'use strict';

const tbody = document.querySelector('tbody');
const thead = document.querySelector('thead');

const sortedList = (i) => {
  const rows = Array.from(tbody.querySelectorAll('tr'));

  if (i < 2) {
    rows.sort((a, b) =>
      a.children[i].textContent.localeCompare(b.children[i].textContent),);
  } else {
    rows.sort(
      (a, b) =>
        +a.children[i].textContent.replaceAll(/[$,]/g, '') -
        +b.children[i].textContent.replaceAll(/[$,]/g, ''),
    );
  }

  tbody.innerHTML = '';
  tbody.append(...rows);
};

thead.addEventListener('click', (e) => {
  const title = e.target.textContent;

  if (e.target.tagName !== 'TH') {
    return;
  }

  if (title === 'Name') {
    sortedList(0);
  }

  if (title === 'Position') {
    sortedList(1);
  }

  if (title === 'Age') {
    sortedList(2);
  }

  if (title === 'Salary') {
    sortedList(3);
  }
});
