'use strict';

const head = document.querySelectorAll('thead th');
const list = document.querySelectorAll('tbody tr');

for (let i = 0; i < head.length; i++) {
  head[i].addEventListener('click', () => {
    for (let k = 0; k < list.length; k++) {
      for (let j = k; j < list.length;j++) {
        if (i < 2) {
          if (list[k].children[i].textContent >list[j].children[i].textContent) {
            const tempHTML = list[k].innerHTML;
            list[k].innerHTML = list[j].innerHTML;
            list[j].innerHTML = tempHTML;
          }
        }

        if (i === 2) {
          if (Number(list[k].children[i].textContent) > Number(list[j].children[i].textContent)) {
            const tempHTML = list[k].innerHTML;
            list[k].innerHTML = list[j].innerHTML;
            list[j].innerHTML = tempHTML;
          }
        }

        if (i === 3) {
          if (toNumber(list[k].children[i].textContent) > toNumber(list[j].children[i].textContent)) {
            const tempHTML = list[k].innerHTML;
            list[k].innerHTML = list[j].innerHTML;
            list[j].innerHTML = tempHTML;
          }
        }
      }
    }
  });
}

function toNumber(num) {
  num = num.slice(1);
  num = Number(num.split(',').join(''));
  return num;
}
