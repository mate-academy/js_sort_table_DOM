'use strict';

const table = document.querySelector('table');
const header = document.querySelector('thead');
const headerList = document.querySelector('thead tr');

// hanlder "sorter" which sort page's list by direct parameter
headerList.addEventListener('click', (ev) => {
  ev.preventDefault();

  // table DOM elements
  const tbodyEl = document.querySelector('tbody');
  const tbodyList = Array.from(document.querySelectorAll('tbody tr'));

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

  // create new tbody to add it into page's table
  function createPesonInfoRow(people) {
    const tbody = document.createElement('tbody');

    for (const person of people) {
      const row = document.createElement('tr');

      for (const param of person.children) {
        const value = document.createElement('td');

        value.textContent = param.textContent;
        row.appendChild(value);
      }

      tbody.appendChild(row);
    }

    return tbody;
  }

  const result = createPesonInfoRow(tbodyList);

  // removes unsorted table
  table.removeChild(tbodyEl);
  // add sorted table
  header.after(result);
});
