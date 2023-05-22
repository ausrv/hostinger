export class HomePage{

    navigateToHomePage(){
        cy.visit(Cypress.env('baseUrl'))
        cy.logging('Opened '+ Cypress.env('baseUrl'))
    }

    acceptCookies(){
        cy.get('[data-click-id="hgr-cookie_consent-accept_all_btn"]').click()
        cy.logging('Accepted cookies')
    }

    addBusinessWebPlanToCart(){
        cy.get(':nth-child(3) > .h-carousel-card-wrapper__card > .h-pricing-card > .h-pricing-card__container > .h-button').click({force: true})
        cy.get('.cart-heading > .flex-grow').should('be.visible')
        cy.logging('Added business plan to the cart')
    }
}