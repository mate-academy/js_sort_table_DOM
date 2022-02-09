'use strict';

// write code here

const list = document.querySelector('tbody');
const header = document.querySelector('thead');
const sortTarget = header.firstElementChild;

function toNumber(num) {
  return num.split('').splice(1).join('')
    .split(',').join('');
}

[...sortTarget.children].forEach((e, index) => {
  e.addEventListener('click', () => {
    function sortList(a, b) {
      let result;

      if (index === 3) {
        result = toNumber([...a.children][index].innerText)
          - toNumber([...b.children][index].innerText);
      } else {
        result = [...a.children][index]
          .innerText.localeCompare([...b.children][index].innerText);
      }

      return result;
    };

    const sortAmploy = [...list.children].sort(sortList);

    sortAmploy.map(elem => {
      list.append(elem);
    });
  });
});
