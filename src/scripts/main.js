'use strict';

// функция для преобразования строки зарплаты в число
function parseSalary(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}

// функция для форматирования числа обратно в вид "$162,700"
function formatSalary(num) {
  return `$${num.toLocaleString('en-US')}`;
}

function sort(table, i) {
  const rows = Array.from(table.rows);
  const cells = rows.map(row => row.cells[i]);
  const values = rows.map(row => row.cells[i].textContent.trim());

  // проверяем, если это колонка с зарплатой (index = 3)
  if (i === 3) {
    const salaries = values.map(parseSalary);

    // сортировка по числовым значениям
    const sorted = [...salaries].sort((a, b) => a - b);

    // обновляем ячейки в отсортированном порядке
    sorted.forEach((salary, index) => {
      cells[index].textContent = formatSalary(salary);
    });

  // если колонка с возрастом — сортируем числа
  } else if (i === 2) {
    const ages = values.map(Number);
    const sorted = [...ages].sort((a, b) => a - b);
    sorted.forEach((age, index) => cells[index].textContent = age);

  // иначе — сортируем строки (имена, должности)
  } else {
    const sorted = [...values].sort((a, b) => a.localeCompare(b));
    sorted.forEach((val, index) => cells[index].textContent = val);
  }
}

const thead = document.querySelector('thead');
const tbody = document.querySelector('tbody');

thead.addEventListener('click', (e) => {
  switch (e.target.textContent.trim()) {
    case 'Name': sort(tbody, 0); break;
    case 'Position': sort(tbody, 1); break;
    case 'Age': sort(tbody, 2); break;
    case 'Salary': sort(tbody, 3); break;
  }
});
