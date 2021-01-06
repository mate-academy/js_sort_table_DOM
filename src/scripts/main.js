'use strict';

const list = document.querySelector('tbody');
const properties = document.querySelector('thead tr');

properties.addEventListener('click', (event) => {
  const propertyIndex = [...properties.children].indexOf(event.target);

  list.append(...sortPeople(list, propertyIndex));
});

function sortPeople(peopleList, propertyIndex) {
  return [...peopleList.children].sort((prev, curr) => {
    const formattedPrev = [...prev.children][propertyIndex]
      .textContent
      .replace(/[$,]/g, '');
    const formattedCurr = [...curr.children][propertyIndex]
      .textContent
      .replace(/[$,]/g, '');

    return (!isNaN(formattedPrev))
      ? formattedPrev - formattedCurr
      : formattedPrev.localeCompare(formattedCurr);
  });
};
