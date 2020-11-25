'use strict';

Cypress.Commands.add('isSorted', (columnName, clolumnNumber) => {
  cy.contains(columnName).click();

  cy.get(`tr:nth-child(n) td:nth-child(${clolumnNumber})`).then(($fcolumn) => {
    const columns = [...$fcolumn].map((column) =>
      column.innerText.replace('$', '').replace(',', ''));
    let counter = 0;

    for (let i = 0; i < columns.length; i++) {
      if (isNaN(Number(columns[i]))) {
        if (columns[i + 1] >= columns[i]) {
          counter += 1;
        }
      }

      if (Number(columns[i + 1]) >= Number(columns[i])) {
        counter += 1;
      }
    }

    expect(counter).to.equal(columns.length - 1);
  });
});

describe('Sorting table app', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should sort in ASC order when user clicks on `Name` header', () => {
    cy.isSorted('Name', 1);
  });

  it('should sort in ASC order when user clicks on `Position` header', () => {
    cy.isSorted('Position', 2);
  });

  it('should sort in ASC order when user clicks on `Age` header', () => {
    cy.isSorted('Age', 3);
  });

  it('should sort in ASC order when user clicks on `Salary` header', () => {
    cy.isSorted('Salary', 4);
  });
});
