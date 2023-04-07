'use strict';

const tableHead = document.querySelector('thead');

function sortingColumn(e) {
  const sortByColumn = e.target.innerText;
  const tableRows = [...document.querySelectorAll('tr')];
  const tableDataToSort = [];

  for (let i = 1; i < tableRows.length - 1; i++) {
    const cells = tableRows[i].cells;
    const person = {};

    person.Name = cells[0].innerText;
    person.Position = cells[1].innerText;
    person.Age = cells[2].innerText;
    person.Salary = cells[3].innerText;

    tableDataToSort.push(person);
  };

  if (sortByColumn === 'Salary') {
    tableDataToSort.sort((a, b) => {
      const toNumberA = a.Salary.match(/\d+/g).join('');
      const toNumberB = b.Salary.match(/\d+/g).join('');

      return toNumberA - toNumberB;
    });
  } else {
    tableDataToSort.sort((a, b) =>
      a[sortByColumn].localeCompare(b[sortByColumn]));
  }

  for (let i = 1; i < tableRows.length - 1; i++) {
    const tableRow = tableRows[i];

    tableRow.innerHTML = `
      <td>${tableDataToSort[i - 1].Name}</td>
      <td>${tableDataToSort[i - 1].Position}</td>
      <td>${tableDataToSort[i - 1].Age}</td>
      <td>${tableDataToSort[i - 1].Salary}</td>
    `;
  }
};

tableHead.addEventListener('click', sortingColumn);
