'use strict';

const thead = document.querySelector('thead');
const thElements = thead.querySelectorAll('th');

const tbody = document.querySelector('tbody');
const bodyRows = tbody.querySelectorAll('tr');

const sort = (container, elements, column, sortType, sortBy = 'asc') => {
  container.innerHTML = '';

  Array.from(elements)
    .sort((a, b) => {
      let [textA, textB] = [
        a.cells[column].innerText.trim(),
        b.cells[column].innerText.trim(),
      ];

      let sortResult;

      if (sortType === 'string') {
        sortResult = textA.localeCompare(textB);
      } else if (sortType === 'number') {
        textA = textA.replace(/[$,]/g, '');
        textB = textB.replace(/[$,]/g, '');
        sortResult = parseFloat(textA) - parseFloat(textB);
      }

      return sortBy === 'asc' ? sortResult : -sortResult;
    })
    .forEach((el) => {
      container.append(el);
    });
};

thElements.forEach((th) => {
  th.addEventListener('click', (e) => {
    const element = e.target;
    const siblings = Array.from(element.parentNode.children);
    const index = siblings.indexOf(element);

    if (index === 0 || index === 1) {
      sort(tbody, bodyRows, index, 'string');
    } else if (index === 2 || index === 3) {
      sort(tbody, bodyRows, index, 'number');
    }
  });
});
