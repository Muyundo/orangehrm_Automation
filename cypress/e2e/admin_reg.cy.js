/// <reference types = "cypress"/>
beforeEach(() =>{
    cy.baseurl()
    cy.login()
    
    })
    it('Add new user', () => {
        cy.get('.oxd-navbar-nav').contains('Admin').click()
        cy.get('.orangehrm-header-container > .oxd-button').click()
        cy.get('div.oxd-select-wrapper .oxd-select-text.oxd-select-text--active').contains('-- Select --')
          .click()
        cy.get('.oxd-select-dropdown').contains('ESS').click()

        cy.get('div.oxd-select-wrapper .oxd-select-text.oxd-select-text--active .oxd-select-text-input', {timeout: 10000})
          .contains('-- Select --')
          .click()
          cy.get('.oxd-select-dropdown').contains('Enabled').click()

        cy.get('.oxd-autocomplete-text-input--before').type('George')
})
     
    
    