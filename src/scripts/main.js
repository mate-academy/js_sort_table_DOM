'use strict';

const tableHeader = document.querySelector('thead');

const tablebody = document.querySelectorAll('tbody >tr');
const tbody = document.querySelector('tbody');

const thead = document.querySelector('thead>tr');

tableHeader.addEventListener('click', (events) => {
  const item = events.target.textContent;
  let children = 0;

  for (let i = 0; i < thead.children.length; i++) {
    if (item === thead.children[i].textContent) {
      children = i;
    }
  }

  const listArr = [...tablebody];

  if (item === 'Salary') {
    listArr.sort((x, y) =>
      (+y.children[children].textContent.replace(/,/g, '').replace('$', ''))
    - (+x.children[children].textContent.replace(/,/g, '').replace('$', '')));
  } else {
    listArr.sort((x, y) =>
      y.children[children].textContent
        .localeCompare(x.children[children].textContent));
  }

  for (const element of listArr) {
    tbody.prepend(element);
  }
});
