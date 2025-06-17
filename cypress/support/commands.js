Cypress.Commands.add('baseurl', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url().should('include', '/auth/login')

})

Cypress.Commands.add('login', () =>{
        cy.get('input[name = "username"]', {timeout: 10000})
          .type('Admin')
        cy.get('input[name = password]', {timeout: 10000})
          .type('admin123')
        cy.get('.oxd-button').contains('Login')
           .should('be.visible')
           .click()
   
})

   