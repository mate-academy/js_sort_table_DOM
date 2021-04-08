'use strict';

const head = document.querySelector('thead').querySelector('tr');
// const list = document.querySelector('tbody');
const body = document.querySelector('tbody');
const sortedBody = [...body.querySelectorAll('tr')];
const byName = head.children[0];
const byPosition = head.children[1];
const byAge = head.children[2];
const bySalary = head.children[3];

bySalary.addEventListener('click', () => {
  sortedBody.sort((a, b) => {
    const first = Number(a.children[3].textContent
      .slice(1).split(',').join(''));
    const second = Number(b.children[3].textContent
      .slice(1).split(',').join(''));

    return first - second;
  });
  body.prepend(...sortedBody);
});

byAge.addEventListener('click', () => {
  sortedBody.sort((a, b) => {
    return a.children[2].textContent - b.children[2].textContent;
  });
  body.prepend(...sortedBody);
});

byPosition.addEventListener('click', () => {
  sortedBody.sort((a, b) => {
    return a.children[1].textContent.localeCompare(b.children[1].textContent);
  });
  body.prepend(...sortedBody);
});

byName.addEventListener('click', () => {
  sortedBody.sort((a, b) => {
    return a.children[0].textContent.localeCompare(b.children[0].textContent);
  });
  body.prepend(...sortedBody);
});
