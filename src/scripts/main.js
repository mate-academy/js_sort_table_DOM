'use strict';

const tbody = document.getElementsByTagName('tbody')[0];
const rows = tbody.children;
const sortCategory = {
  name: 'Name',
  position: 'Position',
  age: 'Age',
  salary: 'Salary',
};

document.body.addEventListener('click', (e) => {
  const { target } = e;
  let arr;

  if (target.localName === 'th') {
    switch (target.innerText) {
      case sortCategory.name:
        arr = [...rows].sort((elem1, elem2) => {
          const first = elem1.children[0].innerText;
          const second = elem2.children[0].innerText;

          return first.localeCompare(second);
        });

        break;

      case sortCategory.position:
        arr = [...rows].sort((elem1, elem2) => {
          const first = elem1.children[1].innerText;
          const second = elem2.children[1].innerText;

          return first.localeCompare(second);
        });

        break;

      case sortCategory.age:
        arr = [...rows].sort((elem1, elem2) => {
          const first = getNumber(elem1.children[2].innerText);
          const second = getNumber(elem2.children[2].innerText);

          return first - second;
        });

        break;

      case sortCategory.salary:
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
