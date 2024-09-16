'use strict';

// write code here

const table = document.querySelector(`table`);
const bodyOfTable = document.querySelector(`tbody`);
const people = bodyOfTable.querySelectorAll(`tr`);

table.addEventListener(`click`, (event1) => {
  if (event1.target.tagName !== `TH`) {
    return;
  }

  const peopleArr = [...people];

  if (event1.target.textContent === `Salary`) {
    peopleArr.sort((a, b) => {
      const sallaryA = a.children[3].textContent.replace(/[$,]/g, ``);
      const sallaryB = b.children[3].textContent.replace(/[$,]/g, ``);

      return Number(sallaryA) - Number(sallaryB);
    });
  }

  if (event1.target.textContent === `Age`) {
    peopleArr.sort((a, b) => {
      const ageA = a.children[2].textContent;
      const ageB = b.children[2].textContent;

      return Number(ageA) - Number(ageB);
    });
  }

  if (event1.target.textContent === `Name`) {
    peopleArr.sort((a, b) => {
      const nameA = a.children[0].textContent;
      const nameB = b.children[0].textContent;

      return nameA.localeCompare(nameB);
    });
  }

  if (event1.target.textContent === `Position`) {
    peopleArr.sort((a, b) => {
      const positionA = a.children[1].textContent;
      const positionB = b.children[1].textContent;

      return positionA.localeCompare(positionB);
    });
  }

  for (const el of peopleArr) {
    bodyOfTable.append(el);
  }
});
