'use strict';

// debugger;

const table = document.querySelector('table');
const tableHead = table.querySelector('thead');
const tableBody = table.querySelector('tbody');
const listItems = tableBody.querySelectorAll('tr');
const headers = tableHead.querySelectorAll('th');

const SORT_IN_ASCEDING_ORDER = 'ASC';
const SORT_IN_DESCENDING_ORDER = 'DESC';

function addEventsToHeaders(list) {
  for (let i = 0; i < list.length; i++) {
    switch (list[i].textContent.toLowerCase()) {
      case 'name':
        list[i].addEventListener('click', () => {
          const sortedList = sortByString(listItems, i, SORT_IN_ASCEDING_ORDER);

          refreshTheList(sortedList, tableBody);
        });
        break;

      case 'position':
        list[i].addEventListener('click', () => {
          const sortedList = sortByString(listItems, i, SORT_IN_ASCEDING_ORDER);

          refreshTheList(sortedList, tableBody);
        });
        break;

      case 'age':
        list[i].addEventListener('click', () => {
          const sortedList = sortByNumber(listItems, i, SORT_IN_ASCEDING_ORDER);

          refreshTheList(sortedList, tableBody);
        });
        break;

      case 'salary':
        list[i].addEventListener('click', () => {
          const sortedList = sortBySalary(listItems, i, SORT_IN_ASCEDING_ORDER);

          refreshTheList(sortedList, tableBody);
        });
        break;
    }
  }
}

function sortByNumber(list, column, sortingSystem) {
  const sortedList = [...list].sort((element1, element2) => {
    const number1 = Number(element1.children[column].textContent);
    const number2 = Number(element2.children[column].textContent);

    if (sortingSystem === SORT_IN_ASCEDING_ORDER) {
      return number1 - number2;
    }

    if (sortingSystem === SORT_IN_DESCENDING_ORDER) {
      return number2 - number1;
    }
  });

  return sortedList;
}

function sortByString(list, column, sortingSystem) {
  const sortedList = [...list].sort((element1, element2) => {
    const string1 = element1.children[column].textContent
      .toLowerCase()
      .replaceAll(' ', '');
    const string2 = element2.children[column].textContent
      .toLowerCase()
      .replaceAll(' ', '');

    if (sortingSystem === SORT_IN_ASCEDING_ORDER) {
      return string1.localeCompare(string2);
    }

    if (sortingSystem === SORT_IN_DESCENDING_ORDER) {
      return string2.localeCompare(string1);
    }
  });

  return sortedList;
}

function sortBySalary(list, column, sortingSystem) {
  const sortedList = [...list].sort((element1, element2) => {
    const salary1 = Number(
      element1.children[column].textContent.replaceAll(/\D/g, '')
    );
    const salary2 = Number(
      element2.children[column].textContent.replaceAll(/\D/g, '')
    );

    if (sortingSystem === SORT_IN_ASCEDING_ORDER) {
      return salary1 - salary2;
    }

    if (sortingSystem === SORT_IN_DESCENDING_ORDER) {
      return salary2 - salary1;
    }
  });

  return sortedList;
}

function refreshTheList(sortedList, tableToRefresh) {
  sortedList.forEach((e) => {
    tableToRefresh.append(e);
  });
}

addEventsToHeaders(headers);
