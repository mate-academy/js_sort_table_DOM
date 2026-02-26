'use strict';

const table = document.querySelector('table');
const tHead = table.tHead;
const tbody = Array.from(table.tBodies[0].children);

tHead.addEventListener('click', (e) => {
  const target = e.target;

  if (target.textContent === 'Age') {
    const tbodyNow = table.tBodies[0];
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
    const tbodyNow = table.tBodies[0];
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
    const tbodyNow = table.tBodies[0];
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
    const tbodyNow = table.tBodies[0];
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
