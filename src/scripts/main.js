'use strict';

// write code here

const body = document.body;
const thead = document.querySelector('thead');
const hName = thead.children[0].children[0];
const hPosition = thead.children[0].children[1];
const hAge = thead.children[0].children[2];
// const hSalary = thead.children[0].children[3];
const tBody = document.querySelector('tbody');
const rowsList = [...tBody.querySelectorAll('tr')];

body.addEventListener('click', (e) => {
  const target = e.target;

  if (target.tagName !== 'TH') {
    return;
  }

  switch (target) {
    case hName:
      const sortedNames = rowsList.sort((prev, next) => {
        const prevColText = prev.children[0].textContent;
        const nextColText = next.children[0].textContent;

        return prevColText.localeCompare(nextColText);
      });

      tBody.append(...sortedNames);
      break;
    case hPosition:
      const sortedPos = rowsList.sort((prev, next) => {
        const prevColText = prev.children[1].textContent;
        const nextColText = next.children[1].textContent;

        return prevColText.localeCompare(nextColText);
      });

      tBody.append(...sortedPos);
      break;
    case hAge:
      const sortedAges = rowsList.sort((prev, next) => {
        const prevColText = prev.children[2].textContent;
        const nextColText = next.children[2].textContent;

        return prevColText - nextColText;
      });

      tBody.append(...sortedAges);
      break;
    default:
      const sortedSalaries = rowsList.sort((prev, next) => {
        const prevColText = prev.children[3].textContent.replace(/[$,]/g, '');
        const nextColText = next.children[3].textContent.replace(/[$,]/g, '');

        return prevColText - nextColText;
      });

      tBody.append(...sortedSalaries);
  }
});
