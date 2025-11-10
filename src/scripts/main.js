'use strict';

const theads = [...document.querySelectorAll('thead tr th')];

const tbody = document.querySelector('tbody');
const tbodyChildren = [...document.querySelectorAll('tbody tr')];

theads.forEach((header, index) => {
  header.addEventListener('click', () => {
    const sorted = tbodyChildren.sort((a, b) => {
      let valueA;
      let valueB;

      // index 3 = salary
      if (index === 3) {
        valueA = a.children[index].textContent.split('$')[1].replace(',', '');
        valueB = b.children[index].textContent.split('$')[1].replace(',', '');
      } else {
        valueA = a.children[index].textContent;
        valueB = b.children[index].textContent;
      }

      if (!isNaN(+valueA) && !isNaN(+valueB)) {
        return +valueA - +valueB;
      }

      return valueA.localeCompare(valueB);
    });

    tbody.innerHTML = '';
    sorted.forEach((el) => tbody.append(el));
  });
});
