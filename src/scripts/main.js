'use strict';

const categories = document.querySelectorAll('thead tr th');
const content = document.querySelector('tbody');
const elements = [...document.querySelectorAll('tbody tr')];

const convert = field => (
  +field
    ? +field
    : +(field.substring(1).split(',').join(''))
);

[...categories].forEach(element => {
  let toggler = true;

  element.addEventListener('click', (e) => {
    const sortedContent = elements.sort((first, second) => {
      const firstElement = first.children[e.target.cellIndex].textContent;
      const secondElement = second.children[e.target.cellIndex].textContent;

      if (isNaN(convert(firstElement))) {
        return toggler
          ? firstElement.localeCompare(secondElement)
          : secondElement.localeCompare(firstElement);
      } else {
        return toggler
          ? convert(firstElement) - convert(secondElement)
          : convert(secondElement) - convert(firstElement);
      }
    });

    content.append(...sortedContent);
    toggler = !toggler;
  });
});
