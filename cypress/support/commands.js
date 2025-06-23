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


Cypress.Commands.add('datePicker', () => {
  const dayjs = require('dayjs')
  const today = dayjs();

  let startDate
  while (true) {
    const offset = Math.floor(Math.random() * 14)
    const candidate = today.add(offset, 'day');
    if (candidate.day() >= 1 && candidate.day() <= 4) {
      startDate = candidate
      break
    }
  }

  let leaveDays = 0;
  let endDate = startDate;
  while (leaveDays < 4) {
    if (endDate.day() !== 0 && endDate.day() !== 6) leaveDays++;
    if (leaveDays < 4) endDate = endDate.add(1, 'day');
  }

  const selectDate = (label, date) => {
    const day = date.date();
    const month = date.format('MMMM')
    const year = date.year();

    cy.contains('label', label)
      .parents('.oxd-input-group')
      .find('.oxd-date-input-icon')
      .click();

    cy.get('.oxd-calendar-selector-month').then($el => {
      if (!$el.text().includes(month)) {
        const now = dayjs();
        const diff = date.diff(now, 'month');
        const arrowSelector = diff > 0 ? '.bi-chevron-right' : '.bi-chevron-left';

        for (let i = 0; i < Math.abs(diff); i++) {
          cy.get(arrowSelector).click();
        }
      }
    });

    cy.get('.oxd-calendar-date')
      .not('.oxd-calendar-date--disabled')
      .contains(new RegExp(`^${day}$`))
      .click();
  };

  selectDate('From Date', startDate);
  selectDate('To Date', endDate);
});



   