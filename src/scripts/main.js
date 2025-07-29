'use strict';

const employers = document.querySelectorAll('tbody > tr');
const tableBody = document.querySelector('tbody');

console.log(Array.from(employers))

const sortByName = () => {
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const name1 = employer1.children[0].textContent.trim();
    const name2 = employer2.children[0].textContent.trim();

    return name1.localeCompare(name2)
  })
  tableBody.innerHTML = '';

  console.log(sorted);

  for (const n of sorted) {
    tableBody.append(n);
  }
}

const sortByPosition = () => {
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = employer1.children[1].textContent.trim();
    const position2 = employer2.children[1].textContent.trim();

    return position1.localeCompare(position2)
  })
  tableBody.innerHTML = '';

  console.log(sorted);

  for (const n of sorted) {
    tableBody.append(n);
  }
}

const sortByAge = () => {
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = Number(employer1.children[2].textContent);
    const position2 = Number(employer2.children[2].textContent);

    return position1 - position2;
  })
  tableBody.innerHTML = '';

  console.log(sorted);

  for (const n of sorted) {
    tableBody.append(n);
  }
}

const sortBySalary = () => {
  const sorted = Array.from(employers).sort((employer1, employer2) => {
    const position1 = employer1.children[3].textContent.replace('$', '').replace(/,/g, '');
    const position2 = employer2.children[3].textContent.replace('$', '').replace(/,/g, '');

    return Number(position1) - Number(position2);
  })
  tableBody.innerHTML = '';

  console.log(sorted);

  for (const n of sorted) {
    tableBody.append(n);
  }
}

document.addEventListener('click', (event) => {
  console.log(event.target)

  if (event.target.textContent === 'Name' && event.target.closest('thead')) {
    sortByName()
  } else if (event.target.textContent === 'Position' && event.target.closest('thead')) {
    sortByPosition()
  } else if (event.target.textContent === 'Age' && event.target.closest('thead')) {
    sortByAge().textContent
  } else if (event.target.textContent === 'Salary' && event.target.closest('thead')) {
    sortBySalary()
  }
});
