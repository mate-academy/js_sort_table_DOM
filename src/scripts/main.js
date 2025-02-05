'use strict';

const list = document.querySelector('table');

function sortBy(table, type) {
  const tableBody = table.querySelector('tbody');
  const tableFirstLine = tableHead.querySelectorAll('th');
  let index = -1;

  for (let i = 0; i < tableFirstLine.length; i++) {
    if (tableFirstLine[i].textContent.trim() === type) {
      index = i;
      break;
    }
  }

  if (index === -1) {
    return;
  }

  const bodyLines = Array.from(tableBody.querySelectorAll('tr'));
  const listOfObj = [];

  for (const el of bodyLines) {
    listOfObj.push({
      content: el.children[index].textContent,
      el: el,
    });
  }

  const isNumeric = !isNaN(
    parseFloat(listOfObj[0].content.replace(/[$,]/g, '')),
  );

  if (isNumeric) {
    listOfObj.sort(
      (a, b) =>
        parseFloat(a.content.replace(/[$,]/g, '')) -
        parseFloat(b.content.replace(/[$,]/g, '')),
    );
  } else {
    listOfObj.sort((a, b) => a.content.localeCompare(b.content));
  }

  listOfObj.forEach((item) => tableBody.appendChild(item.el));
}

const tableHead = list.querySelector('thead');

tableHead.addEventListener('click', function (e) {
  if (e.target.closest('th')) {
    const getType = e.target.closest('th').textContent;

    sortBy(list, getType);
  }
});
