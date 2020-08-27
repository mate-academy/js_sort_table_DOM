'use strict';

const employees = [...document.querySelectorAll('tbody tr')];
const filters = document.querySelector('thead tr');

filters.addEventListener('click', (event) => {
  const category = [...filters.children].indexOf(event.target);
  const sortedList = employees.sort((a, b) => {
    const firstPerson = a.children[category].innerText.replace(/[$,]/g, '');
    const secondPerson = b.children[category].innerText.replace(/[$,]/g, '');

    if (isNaN(firstPerson)) {
      return firstPerson.localeCompare(secondPerson);
    }

    return firstPerson - secondPerson;
  });

  document.querySelector('tbody').append(...sortedList);
});
