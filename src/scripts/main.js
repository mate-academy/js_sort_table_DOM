'use strict';

// write code here

const table = document.querySelector('table');
const header = document.querySelector('thead');

// get array of persons from table

function getPeople() {
  const keys = Array.from(table.querySelectorAll('thead th')).map((th) => {
    return th.textContent.trim();
  });

  const values = Array.from(table.querySelectorAll('tbody tr'));

  const people = values.map((row) => {
    const cells = Array.from(row.querySelectorAll('td'));
    const person = {};

    keys.forEach((key, index) => {
      person[key] = cells[index].textContent.trim();
    });

    return person;
  });

  return people;
}

// method for sorting

function sortByClick(field, arrayForSort) {
  const newArray = [...arrayForSort].sort((a, b) => {
    if (
      typeof a[field] === 'string' &&
      typeof b[field] === 'string' &&
      !a[field].includes('$')
    ) {
      return a[field].localeCompare(b[field]);
    }

    const val1 = a[field].replace(/[$,]/g, '');
    const val2 = b[field].replace(/[$,]/g, '');

    return val1 - val2;
  });

  return newArray;
}

// method for adding data of objects to table

function addingContent(textContent, rowToAppend) {
  const td = document.createElement('td');

  td.textContent = textContent;
  rowToAppend.appendChild(td);
}

// creating event for clicking

header.addEventListener('click', (e) => {
  const fieldForSort = e.target.textContent.trim();

  const newPeople = sortByClick(fieldForSort, getPeople());

  const tbody = table.querySelector('tbody');

  tbody.innerHTML = '';

  newPeople.forEach((person) => {
    const tr = document.createElement('tr');

    for (const key of Object.keys(person)) {
      addingContent(person[key], tr);
    }

    tbody.appendChild(tr);
  });
});
