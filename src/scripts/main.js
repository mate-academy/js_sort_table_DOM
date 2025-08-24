'use strict';

const headerList = document.querySelector('thead tr');

// hanlder "sorter" which sort page's list by direct parameter
headerList.addEventListener('click', (ev) => {
  ev.preventDefault();

  if (!ev.target.closest('tr')) {
    return;
  }

  // create tbody's DOM elements
  const tbody = document.querySelector('tbody');
  const tbodyList = Array.from(tbody.querySelectorAll('tr'));

  const sortParameter = ev.target.closest('th');
  let count = 0;
  let sortParamNum = 0;

  // count a number of a parameter to sorty by
  for (const child of headerList.children) {
    if (child.textContent === sortParameter.textContent) {
      sortParamNum = count;
    }
    count++;
  }

  // sorts the array from tbody element by selected parameter
  tbodyList.sort((person1, person2) => {
    const n = sortParamNum;

    const firstParsed = parseFloat(
      person1.children[n].textContent.replace(/[^\d.]/g, ''),
    );
    const secondParsed = parseFloat(
      person2.children[n].textContent.replace(/[^\d.]/g, ''),
    );

    if (!isNaN(firstParsed) && !isNaN(secondParsed)) {
      return firstParsed - secondParsed;
    } else {
      const pers1 = person1.children[n].textContent;
      const pers2 = person2.children[n].textContent;

      return pers1.localeCompare(pers2);
    }
  });

  tbody.innerText = '';

  for (const item of tbodyList) {
    tbody.appendChild(item);
  }
});
