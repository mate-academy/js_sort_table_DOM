'use strict';

const tBody = document.querySelector('tbody');
const trList = [...tBody.children];

const sortArray = (list, num) => {
  return list.sort((a, b) => {
    if (a.children[num].innerHTML < b.children[num].innerHTML) {
      return -1;
    } else if (a.children[num].innerHTML > b.children[num].innerHTML) {
      return 1;
    }

    return 0;
  });
};

document.querySelector('thead')
  .firstElementChild.children[0].addEventListener('click', () => {
    const sortedList = sortArray(trList, 0);

    sortedList.forEach(i => tBody.appendChild(i));
  });

document.querySelector('thead')
  .firstElementChild.children[1].addEventListener('click', () => {
    const sortedList = sortArray(trList, 1);

    sortedList.forEach(i => tBody.appendChild(i));
  });

document.querySelector('thead')
  .firstElementChild.children[2].addEventListener('click', () => {
    const sortedList = sortArray(trList, 2);

    sortedList.forEach(i => tBody.appendChild(i));
  });

document.querySelector('thead')
  .firstElementChild.children[3].addEventListener('click', () => {
    const sortedList = sortArray(trList, 3);

    sortedList.forEach(i => tBody.appendChild(i));
    tBody.prepend(trList[trList.length - 1]);
  });
