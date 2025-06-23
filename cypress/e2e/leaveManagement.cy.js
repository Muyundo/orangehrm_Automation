/// <reference types="cypress" />
const randomNumber = Math.floor(100000 + Math.random() * 900000)

beforeEach(() => {
    cy.baseurl()
    cy.login()
})
it('Verify that leave application page is loaded', () => {
    cy.get('.oxd-main-menu-item', {timeout: 10000}).contains('Leave')
      .click()
    cy.url().should('include', '/leave/viewLeaveList')
})
it('Apply for leave', () => {
    cy.get('.oxd-main-menu-item', {timeout: 10000}).contains('Leave')
      .click()
    cy.get('.oxd-topbar-body', {timeout:10000})
      .contains('Apply')
      .click()
    cy.url().should('include', '/leave/applyLeave')
    cy.get('.oxd-select-text').click()
    cy.get('.oxd-select-dropdown').contains('RS - LIBURAN COY').click()
    cy.datePicker()
    cy.wait(1000)
    cy.get('body').type('{esc}')
    
    cy.get('.oxd-textarea').type('Testing leave application for 4 weekdays')
    cy.get('.oxd-button--secondary').contains('Apply')
        .click();
    //cy.get('.oxd-toast-container.oxd-toast-container--bottom', {timeout: 10000}).should('contain', 'Successfully Applied')
    cy.url().should('include', '/leave/viewLeaveList')


 
})