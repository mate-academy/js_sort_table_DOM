'use strict';

const tBody = document.querySelector('tbody');

const data = [...tBody.children];

const titles = document.querySelectorAll('th');

for (const title of Array.from(titles)) {
  if (title.innerHTML === 'Name') {
    title.addEventListener('click', (e) => {
      data.sort((a, b) => {
        const contentA = a.cells[0].innerHTML;
        const contentB = b.cells[0].innerHTML;

        return contentA.localeCompare(contentB);
      });

      return tBody.append(...data);
    });
  }

  if (title.innerHTML === 'Position') {
    title.addEventListener('click', (e) => {
      data.sort((a, b) => {
        const contentA = a.cells[1].innerHTML;
        const contentB = b.cells[1].innerHTML;

        return contentA.localeCompare(contentB);
      });

      return tBody.append(...data);
    });
  }

  if (title.innerHTML === 'Age') {
    title.addEventListener('click', (e) => {
      data.sort((a, b) => {
        const contentA = a.cells[2].innerHTML;
        const contentB = b.cells[2].innerHTML;

        return contentA - contentB;
      });

      return tBody.append(...data);
    });
  }

  if (title.innerHTML === 'Salary') {
    title.addEventListener('click', (e) => {
      data.sort((a, b) => {
        const contentA = a.cells[3].innerHTML;
        const contentB = b.cells[3].innerHTML;

        return getNumber(contentA) - getNumber(contentB);
      });

      function getNumber(arg) {
        return Number(arg.replace(',', '').replace('$', ''));
      }

      return tBody.append(...data);
    });
  }
}
