'use strict';

const headers = [...document.querySelectorAll('th')];
const newHeaders = headers.slice(0, 4);

const rows = [...document.querySelectorAll('tr')];
const newRows = rows.slice(1, rows.length - 1);

const tableBody = document.querySelector('tbody');

document.addEventListener('click', (e) => {
  // if target name
  if (e.target === newHeaders[0]) {
    const rowData = newRows.map((row) => ({
      element: row,
      value: row.children[0].textContent,
    }));

    rowData.sort((a, b) => a.value.localeCompare(b.value));

    rowData.forEach((data) => {
      tableBody.appendChild(data.element);
    });
  }

  // if target position
  if (e.target === newHeaders[1]) {
    const rowData = newRows.map((row) => ({
      element: row,
      value: row.children[1].textContent,
    }));

    rowData.sort((a, b) => a.value.localeCompare(b.value));

    rowData.forEach((data) => {
      tableBody.appendChild(data.element);
    });
  }

  // if target age
  if (e.target === newHeaders[2]) {
    const rowData = newRows.map((row) => ({
      element: row,
      value: row.children[2].textContent,
    }));

    rowData.sort((a, b) => a.value.localeCompare(b.value));

    rowData.forEach((data) => {
      tableBody.appendChild(data.element);
    });
  }

  // if target salary
  if (e.target === newHeaders[3]) {
    const rowData = newRows.map((row) => ({
      element: row,
      value: parseFloat(row.children[3].textContent.replace(/[^0-9.-]/g, '')),
    }));

    rowData.sort((a, b) => a.value - b.value);

    rowData.forEach((data) => {
      tableBody.appendChild(data.element);
    });
  }
});
