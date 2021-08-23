'use strict';

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');
let trowColl = tbody.querySelectorAll('tr');
const trowArr = [...trowColl];

thead.addEventListener('click', (e) => {
  switch (e.target.innerText) {
    case 'Name': {
      trowColl = trowArr.sort((a, b) =>
        a.children[0].textContent.localeCompare(b.children[0].textContent));
      break;
    }

    case 'Position': {
      trowColl = trowArr.sort((a, b) =>
        a.children[1].textContent.localeCompare(b.children[1].textContent));
      break;
    }

    case 'Age': {
      trowColl = trowArr.sort((a, b) =>
        a.children[2].textContent - b.children[2].textContent);
      break;
    }

    case 'Salary': {
      trowColl = trowArr.sort((a, b) => {
        return a.children[3].textContent.replace(/[^0-9]/g, '')
          - b.children[3].textContent.replace(/[^0-9]/g, '');
      });
      break;
    }
  }

  for (const row of trowColl) {
    tbody.append(row);
  }
});
