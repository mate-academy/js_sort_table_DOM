'use strict';

const tableHead = document.querySelector('thead');
const tableBody = document.querySelector('tbody');
const bodyElements = [...tableBody.querySelectorAll('tr')];

tableHead.addEventListener('click', (e) => {
  const element = e.target.closest('th');
  const allElementsInHead = [...tableHead.querySelectorAll('th')];

  const index = getIndexRow(element, allElementsInHead);

  bodyElements.sort((element1, element2) => {
    const element1Columns = [...element1.querySelectorAll('td')];
    const element2Columns = [...element2.querySelectorAll('td')];

    if (index < 2) {
      return element1Columns[index].textContent.localeCompare(
        element2Columns[index].textContent,
      );
    } else {
      let element1Text = element1Columns[index].textContent;
      let element2Text = element2Columns[index].textContent;

      if (index === 3) {
        element1Text = getClearNumber(element1Text);
        element2Text = getClearNumber(element2Text);
      }

      return element1Text - element2Text;
    }
  });

  tableBody.append(...bodyElements);
});

function getIndexRow(element, allElements) {
  return allElements.findIndex(
    (row, index) => row.textContent === element.textContent,
  );
}

function getClearNumber(value) {
  const splitValue = value.split('');
  const numbers = '0123456789';

  return splitValue.filter((char) => numbers.includes(char)).join('');
}
