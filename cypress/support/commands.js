const dayjs = require('dayjs')
Cypress.Commands.add('logging', (message) => {
    const todaysDate = dayjs().format('YYYY-MM-DD HH:mm:ss')
    const filesDate = dayjs().format('YYYY-MM-DD')
    cy.writeFile('cypress/logs/logs'+filesDate+'.txt', todaysDate + ' ' + message + '\n', {flag: 'a+'})
    cy.log(message)
});