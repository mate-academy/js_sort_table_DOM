'use strict';

Cypress.Commands.add('isSorted', (col, number) => {
  cy.contains(col).click();

  cy.get(`tbody tr:nth-child(n) td:nth-child(${number})`).then(($fcolumn) => {
    const columns = [...$fcolumn].map((column) => column.innerText);
    const sortedColumns = [...columns].sort((a, b) => a - b);
    let counter = 0;

    for (let i = 0; i < columns.length; i++) {
      if (columns[i] === sortedColumns[i]) {
        counter += 1;
      }
    }

    expect(counter).to.equal(columns.length);
  });
});

describe('Sorting table app', () => {
  before(() => {
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
