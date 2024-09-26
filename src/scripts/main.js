'use strict';

const table = document.body.querySelector('table');
const [tableHeaders, tableBody, tableFooters] = [...table.children];

const sortTable = (tableData, sortKey) => {
  const arrheaders = headers => [
    ...headers.children]
    .map(row => [...row.children]
      .map(cell => cell.textContent))[0];

  const compare = (row1, row2, index) => {
    const aTxt = row1.cells[index].textContent;
    const bTxt = row2.cells[index].textContent;

    const salaryToNumber = salary => Number(
      salary.slice(1).split(',').join(''));

    if (index === 0 || index === 1) {
      return aTxt.localeCompare(bTxt);
    }

    if (index === 2) {
      return Number(aTxt) - Number(bTxt);
    }

    return salaryToNumber(aTxt) - salaryToNumber(bTxt);
  };

  const sortIndex = arrheaders(tableHeaders).indexOf(sortKey);

  [...tableData.rows]
    .sort((a, b) => compare(a, b, sortIndex))
    .map(employe => tableData.append(employe));
};

const clickHandker = e => sortTable(tableBody, e.target.textContent);

tableHeaders.addEventListener('click', clickHandker);
tableFooters.addEventListener('click', clickHandker);
