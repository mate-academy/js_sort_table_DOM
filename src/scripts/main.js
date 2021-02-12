'use strict';

const tr = document.querySelectorAll('tr');
const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

for (let i = 1; i < tr.length - 1; i++) {
  tr[i].className = 'data';
}

const dataTr = document.querySelectorAll('.data');
const list = [...dataTr];

let active;

thead.addEventListener('click', (e) => {
  const target = e.target;

  switch (target.innerText) {
    case 'Name':
      if (active !== e.target) {
        list.sort((a, b) => {
          const nameA = a.children[0].innerText.toLowerCase();
          const nameB = b.children[0].innerText.toLowerCase();

          if (nameA > nameB) {
            return 1;
          }

          if (nameA < nameB) {
            return -1;
          }

          return 0;
        });
        active = e.target;
      } else {
        list.reverse();
      }

      tbody.innerHTML = '';
      tbody.append(...list);

      break;
    case 'Position':
      if (active !== e.target) {
        list.sort((a, b) => {
          const positionA = a.children[1].innerText.toLowerCase();
          const positionB = b.children[1].innerText.toLowerCase();

          if (positionA > positionB) {
            return 1;
          }

          if (positionA < positionB) {
            return -1;
          }

          return 0;
        });
        active = e.target;
      } else {
        list.reverse();
      }

      tbody.innerHTML = '';
      tbody.append(...list);

      break;

    case 'Age':
      if (active !== e.target) {
        list.sort(
          (a, b) => +a.children[2].innerText - +b.children[2].innerText
        );
        active = e.target;
      } else {
        list.reverse();
      }

      tbody.innerHTML = '';
      tbody.append(...list);

      break;

    case 'Salary':
      if (active !== e.target) {
        list.sort((a, b) => {
          return (
            +a.children[3].innerText.split('$')[1].split(',').join('')
            - +b.children[3].innerText.split('$')[1].split(',').join('')
          );
        });
        active = e.target;
      } else {
        list.reverse();
      }

      tbody.innerHTML = '';
      tbody.append(...list);

      break;
  }
});
