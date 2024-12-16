'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

// eslint-disable-next-line no-shadow
function clickOnHeaders(event) {
  const currentTh = event.target.closest('th');

  if (!currentTh) {
    return;
  }

  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  if (currentTh.textContent === 'Name') {
    const namesArray = [];

    rows.forEach((row) => {
      namesArray.push(row.firstElementChild);

      row.removeChild(row.firstElementChild);
    });

    const sortedNames = namesArray.sort((nameTd1, nameTd2) => {
      return nameTd1.textContent.localeCompare(nameTd2.textContent);
    });

    rows.forEach((row, i) => {
      row.prepend(sortedNames[i]);
    });
  }

  if (currentTh.textContent === 'Position') {
    const positionsArray = [];

    rows.forEach((row) => {
      positionsArray.push(row.children[1]);

      row.removeChild(row.children[1]);
    });

    const sortedPositions = positionsArray.sort((positionTd1, positionTd2) => {
      return positionTd1.textContent.localeCompare(positionTd2.textContent);
    });

    rows.forEach((row, i) => {
      row.insertBefore(sortedPositions[i], row.children[1]);
    });
  }

  if (currentTh.textContent === 'Age') {
    const agesArray = [];

    rows.forEach((row) => {
      agesArray.push(row.children[2]);

      row.removeChild(row.children[2]);
    });

    const sortedAges = agesArray.sort((ageTd1, ageTd2) => {
      return Number(ageTd2.textContent) - Number(ageTd1.textContent);
    });

    rows.forEach((row, i) => {
      row.insertBefore(sortedAges[i], row.children[2]);
    });
  }

  function SToNumber(string) {
    const filtredString = string.replace(/\$/g, '').replace(/,/g, '');

    return Number(filtredString);
  }

  if (currentTh.textContent === 'Salary') {
    const salariesArray = [];

    rows.forEach((row) => {
      salariesArray.push(row.children[3]);

      row.removeChild(row.children[3]);
    });

    const sortedSalaries = salariesArray.sort((salary1, salary2) => {
      return SToNumber(salary2.textContent) - SToNumber(salary1.textContent);
    });

    rows.forEach((row, i) => {
      row.insertBefore(sortedSalaries[i], row.children[3]);
    });
  }
}

thead.addEventListener('click', clickOnHeaders);
