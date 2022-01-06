'use strict';

'use strict';

const head = document.querySelector('thead');

head.addEventListener('click', (e) => {
  const list = document.querySelectorAll('tr');
  const sortList = document.querySelector('tbody');
  const row = e.target.cellIndex;
  const sorted = [];

  for (let i = 1; i < list.length - 1; i++) {
    sorted.push(list[i]);
    list[i].remove();
  }

  sorted.sort((a, b) => {
    const aE = a.children[row].textContent;
    const bE = b.children[row].textContent;

    if (row === 0 || row === 1) {
      return aE >= bE ? 1 : -1;
    }

    if (row === 3) {
      return +bE.toString().replace(/\$|,/g, '')
            - +aE.toString().replace(/\$|,/g, '');
    }

    return +bE - +aE;
  });

  sorted.forEach(item => sortList.appendChild(item));
});
