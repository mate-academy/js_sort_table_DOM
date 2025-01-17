'use strict';

const thead = document.querySelector('thead');
const headers = [...thead.querySelectorAll('th')];

headers.forEach((header, index) => {
  header.addEventListener('click', () => {
    const tbody = document.querySelector('tbody');

    const arrayOfChildren = [...tbody.querySelectorAll('tr')];
    let sortedChildren = [];

    if (index === 0 || index === 1) {
      sortedChildren = arrayOfChildren.sort((person1, person2) => {
        const per1 = person1.children[index].textContent;
        const per2 = person2.children[index].textContent;

        return per1.localeCompare(per2);
      });
    }

    if (index === 2 || index === 3) {
      sortedChildren = arrayOfChildren.sort(
        (person1, person2) =>
          parseFloat(person1.children[index].textContent.replace('$', '')) -
          parseFloat(person2.children[index].textContent.replace('$', '')),
      );
    }

    tbody.innerHTML = '';
    sortedChildren.forEach((child) => tbody.append(child));
  });
});
