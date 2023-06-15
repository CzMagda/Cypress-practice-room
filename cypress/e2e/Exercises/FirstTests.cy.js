/// <reference types="cypress" />
it('drugi test', function(){
    cy.visit('https://www.wp.pl');
    cy.url().should('contain','wp');
})
it('tres test', function(){
    cy.visit('https://www.cypress.io/');
    cy.url().should('contain','cypress');
    cy.url().should('equal','cypress')
})