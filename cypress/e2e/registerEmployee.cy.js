///  <reference types= "cypress" />
import { randomInputs } from '../support/faker'
const randomNumber = Math.floor(100000 + Math.random() * 900000)


beforeEach(() =>{
    cy.baseurl()
    cy.login()
})

it('Register employee', () =>{
    cy.get('.oxd-navbar-nav').contains('PIM')
      .click()
    cy.get ('.oxd-button').contains('Add')
      .click()

    cy.get('input[name = "firstName"]').type(randomInputs.fname)
    cy.get('input[name = "middleName"]').type(randomInputs.mname)
    cy.get('input[name = "lastName"]').type(randomInputs.lname)
    cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').type(randomNumber)
    cy.get('.oxd-file-input').selectFile('cypress/fixtures/canva/profile.png', {force: true})
    cy.get('.oxd-button--secondary').contains('Save')
      .click()
    cy.get('.oxd-toast-container.oxd-toast-container--bottom', {timeout: 10000}).should('contain', 'Successfully Saved')
    cy.url().should('include', '/pim/viewPersonalDetails')

      })

it('Check for mandatory fields',() => {
    cy.get('.oxd-navbar-nav').contains('PIM')
      .click()
    cy.get ('.oxd-button').contains('Add')
      .click()

    cy.get('.oxd-button--secondary').contains('Save')
      .click()
    cy.get('input[name = "firstName"]').parent().parent().find('.oxd-input-field-error-message')
      .contains('Required')
      .should('be.visible')
    cy.get('input[name = "lastName"]').parent().parent().find('.oxd-input-field-error-message')
      .contains('Required')
      .should('be.visible')
    
})
      


