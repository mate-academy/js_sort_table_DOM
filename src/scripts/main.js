'use strict';

document.addEventListener("DOMContentLoaded", () => {
  const table = document.getElementById("grid");
  const headers = table.querySelectorAll("th");

  headers.forEach((th, columnIndex) => {
    th.addEventListener("click", () => {
      const tbody = table.querySelector("tbody");
      const rows = Array.from(tbody.rows);

      rows.sort((rowA, rowB) => {
        let a = rowA.cells[columnIndex].textContent.trim();
        let b = rowB.cells[columnIndex].textContent.trim();

        // Clean currency and commas if present
        let numA = parseFloat(a.replace(/[$,]/g, ""));
        let numB = parseFloat(b.replace(/[$,]/g, ""));

        if (!isNaN(numA) && !isNaN(numB)) {
          return numA - numB; // numeric sort
        }

        return a.localeCompare(b); // text sort
      });

      tbody.append(...rows);
    });
  });
});

