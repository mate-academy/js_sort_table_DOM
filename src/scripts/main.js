'use strict';

const table = document.querySelector('table');
const thead = table.querySelector('thead');
const tbody = table.querySelector('tbody');

// eslint-disable-next-line no-shadow
thead.addEventListener('click', (event) => {
  if (event.target.tagName !== 'TH') {
    return;
  }

  const index = [...event.target.parentNode.children].indexOf(event.target);
  const rows = [...tbody.querySelectorAll('tr')];

  rows.sort((rowA, rowB) => {
    const a = rowA.children[index].textContent.trim();
    const b = rowB.children[index].textContent.trim();

    const numA = parseFloat(a.replace(/[^0-9.]/g, ''));
    const numB = parseFloat(b.replace(/[^0-9.]/g, ''));

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    }

    return a.localeCompare(b);
  });

  tbody.innerHTML = '';
  rows.forEach((row) => tbody.append(row));
});

// -----------------------------------------------------------------------------
// // Код з поясненням

// const table = document.querySelector('table');
// const thead = table.querySelector('thead');
// const tbody = table.querySelector('tbody');

// // eslint-disable-next-line no-shadow
// thead.addEventListener('click', (event) => {
//   if (event.target.tagName !== 'TH') {
//     return;
//   }

//   // Створюємо масив індексів усіх прямих дітей <tr>.
//   // Замість .children можемо використати .querySelectorAll('th')
//   const index = [...event.target.parentNode.children].indexOf(event.target);

//   // Отримуємо всі рядки з tbody
//   // const rows = Array.from(tbody.querySelectorAll('tr'));
//   const rows = [...tbody.querySelectorAll('tr')];

//   // Сортування по тексту в комірці (index)
//   rows.sort((rowA, rowB) => {
//     const a = rowA.children[index].textContent.trim();
//     const b = rowB.children[index].textContent.trim();

//     // Пробуємо приводити до числа (возраст, зарплата)
//     // parseFloat() перетворює рядок на число
//     // replace(/[^0-9.]/g, '') видаляє всі символи, крім цифр і крапки
//     // $162,700 → 162700
//     const numA = parseFloat(a.replace(/[^0-9.]/g, ''));
//     const numB = parseFloat(b.replace(/[^0-9.]/g, ''));

//     // Перевірка на число
//     if (!isNaN(numA) && !isNaN(numB)) {
//       // Числове сортування
//       return numA - numB;
//     }

//     // Строкове сортування
//     return a.localeCompare(b);
//   });

//   // Очищаємо tbody и вставляємо відсортовані строки
//   tbody.innerHTML = '';
//   rows.forEach((row) => tbody.append(row));
// });

// -----------------------------------------------------------------------------

// Приклад коду якщо б данні були масивом об'єктів у js

// const table = document.querySelector('table');
// const thead = table.querySelector('thead');
// const tbody = table.querySelector('tbody');

// // рендерим таблицу из массива people
// function render(data) {
//   tbody.innerHTML = '';

//   data.forEach((person) => {
//     const row = document.createElement('tr');

//     const infoAboutPerson = [
//       person.name,
//       person.sex === 'f' ? 'Female' : 'Male',
//       person.born,
//       person.died,
//       person.died - person.born,
//       Math.ceil(person.died / 100),
//     ];

//     infoAboutPerson.forEach((el) => {
//       const cell = document.createElement('td');
//       cell.textContent = el;
//       row.append(cell);
//     });

//     tbody.append(row);
//   });
// }

// // первый рендер
// render(people);

// // сортировка по клику
// thead.addEventListener('click', (event) => {
//   if (event.target.tagName !== 'TH') return;

//   const index = [...event.target.parentNode.children].indexOf(event.target);

//   const rows = Array.from(tbody.querySelectorAll('tr'));

//   rows.sort((rowA, rowB) => {
//     const a = rowA.children[index].textContent.trim();
//     const b = rowB.children[index].textContent.trim();

//     const numA = parseFloat(a.replace(/[^0-9.]/g, ''));
//     const numB = parseFloat(b.replace(/[^0-9.]/g, ''));

//     if (!isNaN(numA) && !isNaN(numB)) {
//       return numA - numB;
//     }
//     return a.localeCompare(b);
//   });

//   tbody.innerHTML = '';
//   rows.forEach((row) => tbody.appendChild(row));
// });
