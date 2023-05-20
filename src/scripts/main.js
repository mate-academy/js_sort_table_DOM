'use strict';

const headers = [...document.querySelectorAll('th')];
const tbody = document.querySelector('tbody');
const peopleRows = [...tbody.querySelectorAll('tr')];

headers.forEach((head, index) => {
  head.addEventListener('click', () => {
    peopleRows.sort((person1, person2) => {
      let per1 = person1.children[index].innerHTML;
      let per2 = person2.children[index].innerHTML;

      if (index === 3) {
        per1 = per1.slice(1).replaceAll(',', '');
        per2 = per2.slice(1).replaceAll(',', '');

        return per1 - per2;
      }

      return per1.localeCompare(per2);
    });

    peopleRows.forEach(person => tbody
      .insertAdjacentElement('beforeend', person));
  });
});
