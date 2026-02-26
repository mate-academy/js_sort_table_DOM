'use strict';

const table = document.querySelector('table');
const tHead = table.tHead;
const tbody = Array.from(table.tBodies[0].children);

tHead.addEventListener('click', (e) => {
  const target = e.target;
  const tbodyNow = table.tBodies[0];

  if (target.textContent === 'Age') {
    const number = target.cellIndex;

    const newTbody = tbody.sort((first, second) => {
      const firstFinished = Number(first.children[number].textContent);
      const secondFinished = Number(second.children[number].textContent);

      return firstFinished - secondFinished;
    });

    newTbody.forEach((oneTr) => {
      tbodyNow.append(oneTr);
    });
  }

  if (target.textContent === 'Salary') {
    const number = target.cellIndex;

    const newTbody = tbody.sort((first, second) => {
      const firstFinished = Number(
        first.children[number].textContent.slice(1).split(',').join(''),
      );
      const secondFinished = Number(
        second.children[number].textContent.slice(1).split(',').join(''),
      );

      return firstFinished - secondFinished;
    });

    newTbody.forEach((oneTr) => {
      tbodyNow.append(oneTr);
    });
  }

  if (target.textContent === 'Position') {
    const number = target.cellIndex;
    const newTbody = tbody.sort((first, second) => {
      const firstFinished = first.children[number].textContent;
      const secondFinished = second.children[number].textContent;

      return firstFinished.localeCompare(secondFinished);
    });

    newTbody.forEach((oneTr) => {
      tbodyNow.append(oneTr);
    });
  }

  if (target.textContent === 'Name') {
    const number = target.cellIndex;

    const newTbody = tbody.sort((first, second) => {
      const firstFinished = first.children[number].textContent;
      const secondFinished = second.children[number].textContent;

      return firstFinished.localeCompare(secondFinished);
    });

    newTbody.forEach((oneTr) => {
      tbodyNow.append(oneTr);
    });
  }
});
