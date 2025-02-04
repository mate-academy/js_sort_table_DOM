'use strict';

const thead = document.querySelector('thead');
const theaders = [...thead.querySelectorAll('th')];
const tbody = document.querySelector('tbody');

theaders.forEach((heading, index) => {
  heading.addEventListener('click', function () {
    const rows = [...tbody.querySelectorAll('tr')];

    rows.sort((a, b) => {
      let sortLineA = a.children[index].textContent.trim();
      let sortLineB = b.children[index].textContent.trim();

      if (heading.textContent === 'Salary') {
        sortLineA = parseFloat(sortLineA.replace('$', ''));
        sortLineB = parseFloat(sortLineB.replace('$', ''));
      }

      if (!isNaN(sortLineA) && !isNaN(sortLineB)) {
        return sortLineA - sortLineB;
      } else {
        return sortLineA.localeCompare(sortLineB);
      }
    });

    while (tbody.firstChild) {
      tbody.firstChild.remove();
    }

    rows.forEach((row) => {
      tbody.append(row);
    });
  });
});
