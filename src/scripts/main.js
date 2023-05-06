'use strict';

const headers = [...document.querySelector('thead').children[0].children];
const tbody = document.querySelector('tbody');
const peopleRows = [...document.querySelector('tbody').children];

headers.forEach(head => {
  const index = headers.indexOf(head);

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

    const copyRows = [...peopleRows];

    peopleRows.forEach(person => person.remove());

    copyRows.forEach(person => tbody
      .insertAdjacentElement('beforeend', person));
  });
});
