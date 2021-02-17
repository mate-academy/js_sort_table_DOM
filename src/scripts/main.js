'use strict';

const heading = document.querySelector('table thead tr');
const tableBody = document.querySelector('table tbody');
const tableRows = tableBody.querySelectorAll('tr');

const sortFunction = (toBeSorted, index) => {
  const sorted = [...toBeSorted];
  const content = sorted[0].children[index].textContent.replace(/\D/g, '');

  if (content === '') {
    sorted.sort((one, two) => {
      const first = one.children[index].textContent;
      const second = two.children[index].textContent;

      if (first > second) {
        return 1;
      };

      if (first < second) {
        return -1;
      };

      return 0;
    });
  }

  if (!isNaN(content)) {
    sorted.sort((one, two) => {
      const first = one.children[index].textContent.replace(/\D/g, '');
      const second = two.children[index].textContent.replace(/\D/g, '');

      return first - second;
    });
  };

  tableBody.append(...sorted);
};

heading.addEventListener('click', (eventX) => {
  const index = [...heading.children].indexOf(eventX.target);

  sortFunction(tableRows, index);
});
