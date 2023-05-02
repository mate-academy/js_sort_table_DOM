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

document.querySelector('thead').addEventListener(
  'click', e => {
    const item = e.target;

    switch (item.innerHTML) {
      case 'Salary':
        const sortedSalary = sortArray(trList, 3);

        sortedSalary.forEach(sal => {
          tBody.appendChild(sal);
        });

        tBody.prepend(trList[trList.length - 1]);
        break;

      case 'Age':
        const sortedAge = sortArray(trList, 2);

        sortedAge.forEach(age => tBody.appendChild(age));
        break;

      case 'Position':
        const sortedPosition = sortArray(trList, 1);

        sortedPosition.forEach(pos => tBody.appendChild(pos));
        break;

      default:
        const sortedName = sortArray(trList, 0);

        sortedName.forEach(n => tBody.appendChild(n));
    }
  });
