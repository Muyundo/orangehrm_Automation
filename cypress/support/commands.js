Cypress.Commands.add('baseurl', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/')
    cy.url().should('include', '/auth/login')

})

Cypress.Commands.add('login', () =>{
        cy.get('input[name = "username"]').type('Admin')
        cy.get('input[name = password]').type('admin123')
        cy.get('.oxd-button').contains('Login').click()
   
})

   