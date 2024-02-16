'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const sortTableInit = () => {
    const table = document.querySelector('table');

    if (table) {
      const tableFilters = table.querySelectorAll('thead tr th');
      const tableBody = table.querySelector('tbody');
      const items = tableBody.querySelectorAll('tr');

      const renderArr = (arr) => {
        tableBody.innerHTML = '';
        arr.forEach((item) => tableBody.append(item));
      };

      const sortTable = (filterName) => {
        let arr = [];

        switch (true) {
          case filterName === 'Position':
            arr = [...items].sort((a, b) => {
              const aText = [...a.querySelectorAll('td')][1].textContent;
              const bText = [...b.querySelectorAll('td')][1].textContent;

              return aText.localeCompare(bText);
            });
            break;
          case filterName === 'Age':
            arr = [...items].sort((a, b) => {
              const aNumber = +[...a.querySelectorAll('td')][2].textContent;
              const bNumber = +[...b.querySelectorAll('td')][2].textContent;

              return aNumber - bNumber;
            });
            break;
          case filterName === 'Salary':
            arr = [...items].sort((a, b) => {
              const aNumber = [...a.querySelectorAll('td')][3].textContent;
              const bNumber = [...b.querySelectorAll('td')][3].textContent;
              const fixANumber = +aNumber.replace('$', '').replace(',', '');
              const fixBNumber = +bNumber.replace('$', '').replace(',', '');

              return fixANumber - fixBNumber;
            });
            break;
          default:
            arr = [...items].sort((a, b) => {
              const aText = [...a.querySelectorAll('td')][0].textContent;
              const bText = [...b.querySelectorAll('td')][0].textContent;

              return aText.localeCompare(bText);
            });
        }

        renderArr(arr);
      };

      tableFilters.forEach((filter) => {
        filter.addEventListener('click', ({ target }) => {
          sortTable(target.textContent);
        });
      });
    }
  };

  sortTableInit();
});
