function sortByDataType(byWhichRow, whatToSort) {
  switch (byWhichRow) {
    case 'Name':
      whatToSort.sort((a, b) => {
        const nameA = a.name;
        const nameB = b.name;

        return nameA.localeCompare(nameB);
      });
      break;
    case 'Position':
      whatToSort.sort((a, b) => {
        const positionA = a.position;
        const positionB = b.position;

        return positionA.localeCompare(positionB);
      });
      break;
    case 'Age':
      whatToSort.sort((a, b) => {
        const ageA = +a.age;
        const ageB = +b.age;

        return ageA - ageB;
      });
      break;
    case 'Salary':
      whatToSort.sort((a, b) => {
        const aSalary = +a.salary.match(/\d+,?/g).join('').replace(/,/, '.');
        const bSalary = +b.salary.match(/\d+,?/g).join('').replace(/,/, '.');

        return aSalary - bSalary;
      });
      break;
  }
}

const tableOnPage = document.querySelector('table');

function sortByClick(e) {
  const clickedElement = e.target.textContent;
  const tableData = tableOnPage.cloneNode(true);
  const people = (function () {
    const rows = tableData.tBodies[0].rows;
    const humans = [];

    for (const row of rows) {
      const person = new (function () {
        this.name = row.cells[0].textContent;
        this.position = row.cells[1].textContent;
        this.age = row.cells[2].textContent;
        this.salary = row.cells[3].textContent;
      })();

      humans.push(person);
    }

    return humans;
  })();

  switch (clickedElement) {
    case 'Name':
      sortByDataType(clickedElement, people);
      break;
    case 'Position':
      sortByDataType(clickedElement, people);
      break;
    case 'Age':
      sortByDataType(clickedElement, people);
      break;
    case 'Salary':
      sortByDataType(clickedElement, people);
      break;
  }

  for (let i = 0; i < people.length; i++) {
    const { name: manName, position, age, salary } = people[i];

    const currentRowOnPage = tableOnPage.tBodies[0].rows[i];

    currentRowOnPage.cells[0].textContent = manName;
    currentRowOnPage.cells[1].textContent = position;
    currentRowOnPage.cells[2].textContent = age;
    currentRowOnPage.cells[3].textContent = salary;
  }
}

tableOnPage.tHead.rows[0].addEventListener('click', sortByClick);
