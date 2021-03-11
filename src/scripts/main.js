'use strict';

const table = document.querySelector('table');
const headOfTable = table.querySelector('thead');
const titlesOfTable = headOfTable.querySelectorAll('th');
const bodyOfTable = table.querySelector('tbody');
const stringsOfBody = bodyOfTable.querySelectorAll('tr');

const convertToNumber = (string) => {
  if (string.includes('$')) {
    return Number(string.replace('$', '').split(',').join(''));
  }

  return Number(string);
};

headOfTable.addEventListener('click', (clickEvent) => {
  const element = clickEvent.target;
  const indexOfTitle = [...titlesOfTable].findIndex(title => (
    title.textContent === element.textContent
  ));

  const sortedElements = [...stringsOfBody].sort((early, next) => {
    const textOfEarly = early.children[indexOfTitle].textContent;
    const textOfNext = next.children[indexOfTitle].textContent;

    if (element.textContent === 'Salary' || element.textContent === 'Age') {
      return convertToNumber(textOfEarly) - convertToNumber(textOfNext);
    }

    return textOfEarly.localeCompare(textOfNext);
  });

  bodyOfTable.append(...sortedElements);
});
