///<reference types="cypress" />

// Cypress.config({ defaultCommandTimeout: 10500 })
describe('empty spec', () => {
    it('shows 10 seconds', () => {
        cy.visit('/')
        for (let index = 0; index < 10; index++) {
            cy.contains('.status__time', `00:0${index}`)
        }
    })
})
