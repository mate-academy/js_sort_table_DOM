'use strict';

const sortTable = (e) => {
    const thTarget = e.target;
    if (!thTarget.matches('th')) {
        return;
    }
    const trList = thTarget.closest('tr');
    const items = trList.querySelectorAll('th');
    const thList = [...items].map(item => item.innerText);
    const index = thList.indexOf(thTarget.innerText);
    let table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.querySelector("table");
    switching = true;
    // Set the sorting direction to ascending:
    dir = "asc";
    /* Make a loop that will continue until
    no switching has been done: */
    while (switching) {
      // Start by saying: no switching is done:
      switching = false;
      rows = table.rows;
      /* Loop through all table rows (except the
      first, which contains table headers): */
      for (i = 1; i < (rows.length - 2); i++) {
        // Start by saying there should be no switching:
        shouldSwitch = false;
        /* Get the two elements you want to compare,
        one from current row and one from the next: */
        x = rows[i].getElementsByTagName("TD")[index];
        y = rows[i + 1].getElementsByTagName("TD")[index];
        /* Check if the two rows should switch place,
        based on the direction, asc or desc: */
        if (index === 3) {
            const xf = parseFloat(x.innerHTML.slice(1).replace(",", "."));
            const yf = parseFloat(y.innerHTML.slice(1).replace(",", "."));

            if (dir == "asc") {
                if (xf > yf) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              } else if (dir == "desc") {
                if (xf < yf) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              }
        } else {
            if (dir == "asc") {
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              } else if (dir == "desc") {
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                  // If so, mark as a switch and break the loop:
                  shouldSwitch = true;
                  break;
                }
              }
        }
      }
      if (shouldSwitch) {
        /* If a switch has been marked, make the switch
        and mark that a switch has been done: */
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        // Each time a switch is done, increase this count by 1:
        switchcount ++;
      } else {
        /* If no switching has been done AND the direction is "asc",
        set the direction to "desc" and run the while loop again. */
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
  }

document.body.addEventListener('click', sortTable)
