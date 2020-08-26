'use strict';

(function() {
  const table = document.querySelector('tbody');
  const headings = document.querySelectorAll('th');

  [...headings].forEach((heading, index) => {
    heading.addEventListener('click', () => {
      const sortList = [...table.querySelectorAll('tr')].sort((a, b) => {
        const elem1 = a
          .children[index]
          .innerHTML
          .replace(/[$,]/g, '');

        const elem2 = b
          .children[index]
          .innerHTML
          .replace(/[$,]/g, '');

        if (isFinite(elem1)) {
          return (+elem1) - (+elem2);
        } else {
          return elem1 > elem2 ? 1 : -1;
        }
      });

      table.append(...sortList);
    });
  });
}());
