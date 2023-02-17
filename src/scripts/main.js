'use strict';

const table = document.querySelector('table');
const tbody = table.querySelector('tbody');
const rowInBody = tbody.querySelectorAll('tr');

table.addEventListener('click', sortPeople);

function sortPeople(e) {
  const elemBySort = e.target;

  if (!elemBySort.closest('thead')) {
    return;
  }

  const headElements = [...elemBySort.closest('tr').children];
  const index = headElements.findIndex(item => {
    return item.textContent === elemBySort.textContent;
  });
  const peopleSort = [...rowInBody];

  peopleSort.sort((a, b) => {
    let aSort = a.querySelectorAll('td')[index].textContent;
    let bSort = b.querySelectorAll('td')[index].textContent;

    if (index > 1) {
      aSort = +aSort.replaceAll(',', '').replaceAll('$', '');
      bSort = +bSort.replaceAll(',', '').replaceAll('$', '');

      return aSort - bSort;
    }

    return aSort.localeCompare(bSort);
  });

  peopleSort.forEach(elem => tbody.append(elem));
}
