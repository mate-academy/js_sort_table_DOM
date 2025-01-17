'use strict';

const table = document.querySelector('#table');
const rows = table.rows;
const headerName = rows[0].cells[0];
const headerPosition = rows[0].cells[1];
const headerAge = rows[0].cells[2];
const headerSalary = rows[0].cells[3];

headerName.onclick = () => {
  const SORTBY = 'name';

  sorting(rows, SORTBY);
};

headerPosition.onclick = () => {
  const SORTBY = 'position';

  sorting(rows, SORTBY);
};

headerAge.onclick = () => {
  const SORTBY = 'age';

  sorting(rows, SORTBY);
};

headerSalary.onclick = () => {
  const SORTBY = 'salary';

  sorting(rows, SORTBY);
};

function sorting(items, sortBy) {
  let count = items.length - 2;

  while (count > 0) {
    for (let i = 1; i < items.length - 2; i++) {
      const item = items[i];
      const itemNext = items[i + 1];

      switch (sortBy) {
        case 'name':
          if (
            items[i].cells[0].innerText.localeCompare(
              items[i + 1].cells[0].innerText,
            ) > 0
          ) {
            itemNext.after(item);
          }
          break;

        case 'position':
          if (
            items[i].cells[1].innerText.localeCompare(
              items[i + 1].cells[1].innerText,
            ) > 0
          ) {
            itemNext.after(item);
          }
          break;

        case 'age':
          const age1 = items[i].cells[2].innerText;
          const age2 = items[i + 1].cells[2].innerText;

          if (+age1 > +age2) {
            itemNext.after(item);
          }
          break;

        case 'salary':
          const regex = /\W/g;
          const number1 = items[i].cells[3].innerText.replaceAll(regex, '');
          const number2 = items[i + 1].cells[3].innerText.replaceAll(regex, '');

          if (+number1 > +number2) {
            itemNext.after(item);
          }
          break;
      }
    }
    count--;
  }
}
