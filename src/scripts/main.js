'use strict';

const tr = document.querySelectorAll('tr');
const tbody = document.querySelector('tbody');

for (let i = 1; i < tr.length - 1; i++) {
  tr[i].className = 'data';
}

const dataTr = document.querySelectorAll('.data');
const list = [...dataTr];

let alreadySorted0 = false;

tr[0].children[0].addEventListener('click', () => {
  if (!alreadySorted0) {
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
    alreadySorted0 = true;
  } else {
    list.sort((a, b) => {
      const nameA = a.children[0].innerText.toLowerCase();
      const nameB = b.children[0].innerText.toLowerCase();

      if (nameA > nameB) {
        return -1;
      }

      if (nameA < nameB) {
        return 1;
      }

      return 0;
    });

    alreadySorted0 = false;
  }

  tbody.innerHTML = '';
  tbody.append(...list);
});

let alreadySorted1 = false;

tr[0].children[1].addEventListener('click', () => {
  if (!alreadySorted1) {
    list.sort((a, b) => {
      const nameA = a.children[1].innerText.toLowerCase();
      const nameB = b.children[1].innerText.toLowerCase();

      if (nameA > nameB) {
        return 1;
      }

      if (nameA < nameB) {
        return -1;
      }

      return 0;
    });
    alreadySorted1 = true;
  } else {
    list.sort((a, b) => {
      const nameA = a.children[1].innerText.toLowerCase();
      const nameB = b.children[1].innerText.toLowerCase();

      if (nameA < nameB) {
        return -1;
      }

      if (nameA > nameB) {
        return 1;
      }

      return 0;
    });

    alreadySorted1 = false;
  }

  tbody.innerHTML = '';
  tbody.append(...list);
});

let alreadySorted2 = false;

tr[0].children[2].addEventListener('click', () => {
  if (!alreadySorted2) {
    list.sort((a, b) => +a.children[2].innerText - +b.children[2].innerText);
    alreadySorted2 = true;
  } else {
    list.sort((a, b) => +b.children[2].innerText - +a.children[2].innerText);
    alreadySorted2 = false;
  }

  tbody.innerHTML = '';
  tbody.append(...list);
});

let alreadySorted3 = false;

tr[0].children[3].addEventListener('click', () => {
  if (!alreadySorted3) {
    list.sort((a, b) => {
      return (
        +a.children[3].innerText.split('$')[1].split(',').join('')
        - +b.children[3].innerText.split('$')[1].split(',').join('')
      );
    });
    alreadySorted3 = true;
  } else {
    list.sort((a, b) => {
      return (
        +b.children[3].innerText.split('$')[1].split(',').join('')
        - +a.children[3].innerText.split('$')[1].split(',').join('')
      );
    });
    alreadySorted3 = false;
  }

  tbody.innerHTML = '';
  tbody.append(...list);
});
