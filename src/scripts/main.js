'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');

const toggles = { Name: true, Position: true, Age: true, Salary: true };

const sortColumn = (columnIndex, isNumeric, ascending = true) => {
  const tbody = table.querySelector('tbody');
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((a, b) => {
    let aVal = a.cells[columnIndex].textContent.trim();
    let bVal = b.cells[columnIndex].textContent.trim();

    if (isNumeric) {
      aVal = Number(aVal.replace(/\$|,/g, ''));
      bVal = Number(bVal.replace(/\$|,/g, ''));
    }

    return ascending ? (aVal > bVal ? 1 : aVal < bVal ? -1 : 0)
                     : (aVal < bVal ? 1 : aVal > bVal ? -1 : 0);
  });

  rows.forEach(row => tbody.appendChild(row));
};

thead.addEventListener('click', (event) => {
  const header = event.target.textContent.trim();

  switch (header) {
    case "Name":
      sortColumn(0, false, toggles.Name);
      toggles.Name = !toggles.Name;
      break;
    case "Position":
      sortColumn(1, false, toggles.Position);
      toggles.Position = !toggles.Position;
      break;
    case "Age":
      sortColumn(2, true, toggles.Age);
      toggles.Age = !toggles.Age;
      break;
    case "Salary":
      sortColumn(3, true, toggles.Salary);
      toggles.Salary = !toggles.Salary;
      break;
  }
});
