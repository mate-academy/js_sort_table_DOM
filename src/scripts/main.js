'use strict';

const tbody = document.getElementsByTagName('tbody')[0];
const rows = tbody.children;

document.body.addEventListener('click', (e) => {
  const { target } = e;
  let arr;

  if (target.localName === 'th') {
    switch (target.innerText) {
      case 'Name':
        arr = [...rows].sort((elem1, elem2) => {
          const first = elem1.children[0].innerText;
          const second = elem2.children[0].innerText;

          return first.localeCompare(second);
        });

        break;

      case 'Position':
        arr = [...rows].sort((elem1, elem2) => {
          const first = elem1.children[1].innerText;
          const second = elem2.children[1].innerText;

          return first.localeCompare(second);
        });

        break;

      case 'Age':
        arr = [...rows].sort((elem1, elem2) => {
          const first = getNumber(elem1.children[2].innerText);
          const second = getNumber(elem2.children[2].innerText);

          return first - second;
        });

        break;

      case 'Salary':
        arr = [...rows].sort((elem1, elem2) => {
          const first = getNumber(elem1.children[3].innerText);
          const second = getNumber(elem2.children[3].innerText);

          return first - second;
        });

        break;

      default:
        break;
    }

    arr.forEach(li => {
      tbody.append(li);
    });
  }
});

function getNumber(string) {
  if (!string.includes('$')) {
    return +string;
  }

  return +string.replace(/[$,]/ig, '');
}
