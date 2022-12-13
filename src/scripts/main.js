'use strict';

const tHead = document.querySelector('thead');
const tBody = document.querySelector('tbody');
const rows = [...tBody.children];
let reverse = false;
let value = '';

const handleEvent = (e) => {
  const header = [...document.querySelectorAll('th')];
  const num = header.findIndex(
    item => item.textContent === e.target.textContent
  );

  if (value === e.target.textContent) {
    reverse = !reverse;
  } else {
    reverse = false;
  }

  const newList = [...rows].sort(
    (a, b) => {
      const x = a.children[num].textContent;
      const y = b.children[num].textContent;

      return isNaN(+x.replaceAll(/\W/g, ''))
        ? reverse
          ? y.localeCompare(x)
          : x.localeCompare(y)
        : reverse
          ? +y.replaceAll(/\W/g, '') - +x.replaceAll(/\W/g, '')
          : +x.replaceAll(/\W/g, '') - +y.replaceAll(/\W/g, '');
    });

  value = e.target.textContent;

  for (const item of newList) {
    tBody.append(item);
  }
};

tHead.addEventListener('click', handleEvent);
