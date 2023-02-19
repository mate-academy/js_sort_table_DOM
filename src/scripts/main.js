'use strict';

// write code here

const table = document.getElementsByTagName('table');

const people = table[0].children[1].children;

table[0].children[0].children[0].children[0].addEventListener('click',
  () => sortByName());

table[0].children[0].children[0].children[1].addEventListener('click',
  () => sortByPosition());

table[0].children[0].children[0].children[2].addEventListener('click',
  () => sortByAge());

table[0].children[0].children[0].children[3].addEventListener('click',
  () => sortBySalary());

function sortByName() {
  let switching = true;

  let shouldSwitch;

  let x, y, i;

  while (switching) {
    switching = false;

    for (i = 0; i < (people.length - 1); i++) {
      shouldSwitch = false;
      x = people[i].children[0].innerText.toLowerCase();
      y = people[i + 1].children[0].innerText.toLowerCase();

      if (x.localeCompare(y) === 1) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      people[i].parentNode.insertBefore(people[i + 1], people[i]);
      switching = true;
    }
  }
}

function sortByPosition() {
  let switching = true;

  let shouldSwitch;

  let x, y, i;

  while (switching) {
    switching = false;

    for (i = 0; i < (people.length - 1); i++) {
      shouldSwitch = false;
      x = people[i].children[1].innerText.toLowerCase();
      y = people[i + 1].children[1].innerText.toLowerCase();

      if (x.localeCompare(y) === 1) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      people[i].parentNode.insertBefore(people[i + 1], people[i]);
      switching = true;
    }
  }
}

function sortBySalary() {
  let switching = true;

  let shouldSwitch;

  let x, y, i;

  while (switching) {
    switching = false;

    for (i = 0; i < (people.length - 1); i++) {
      shouldSwitch = false;
      x = +people[i].children[3].innerText.slice(1).replace(',', '');
      y = +people[i + 1].children[3].innerText.slice(1).replace(',', '');

      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      people[i].parentNode.insertBefore(people[i + 1], people[i]);
      switching = true;
    }
  }
}

function sortByAge() {
  let switching = true;

  let shouldSwitch;

  let x, y, i;

  while (switching) {
    switching = false;

    for (i = 0; i < (people.length - 1); i++) {
      shouldSwitch = false;
      x = +people[i].children[2].innerText;
      y = +people[i + 1].children[2].innerText;

      if (x > y) {
        shouldSwitch = true;
        break;
      }
    }

    if (shouldSwitch) {
      people[i].parentNode.insertBefore(people[i + 1], people[i]);
      switching = true;
    }
  }
}
