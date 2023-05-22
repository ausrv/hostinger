export class CartPage{

    choosePeriod(){
        cy.get(':nth-child(3) > #hcart-cart-period-selector > .d-flex.d-block-lg > .d-flex > .radio').click()
        cy.get(':nth-child(3) > #hcart-cart-period-selector > .d-flex.d-block-lg > .d-flex > .radio').should('have.class', 'radio radio--active')
        cy.logging('24 months period was chosen')
    }

    enterEmailAddress(email){
        cy.get('.create-account__inputs > .h-input > .h-input__input-wrapper > .h-input__input').type(email)
        cy.get('.create-account__inputs > .h-input > .h-input__input-wrapper > .h-input__input').should('have.value', email)
        cy.logging('Entered email address: '+ email)
    }

    selectCardPayment(){
        cy.get('#hcart-payment-method-select-processout > .h-radio > .h-radio__box').click({force:true})
        cy.get('#hcart-payment-method-select-processout').should('have.class', 'payment-method payment-method--active')
        cy.logging('Selected card payment')
    }

    fillCardData(name, number, validity, cvc){
        cy.get('#cardholdername').type(name)
        cy.get('#cardholdername').should('have.value', name)
        cy.logging('Typed card name: ' + name)
    }

    selectCountry(){
            cy.get('#country-select > .h-input > .h-input__input-wrapper > .h-input__input').click()
            cy.contains('Latvia').click()
            cy.get('#country-select > .h-input > .h-input__input-wrapper > .h-input__input').should('have.value', 'Latvia')
            cy.logging('Selected country')
    }

    addCompanyDetails(name, address){
        cy.get('.h-checkbox__box').click()

        cy.get('.cc-wrapper > :nth-child(1) > .h-input__input-wrapper > .h-input__input').type(name)
        cy.get('.cc-wrapper > :nth-child(1) > .h-input__input-wrapper > .h-input__input').should('have.value', name)
        cy.logging('Entered company name: ' + name)

        cy.get('.cc-wrapper > :nth-child(2) > .h-input__input-wrapper > .h-input__input').type('LT100007381511')
        cy.get('.cc-wrapper > :nth-child(2) > .h-input__input-wrapper > .h-input__input').should('have.value', 'LT100007381511')
        cy.logging('Entered company vat: ' + 'LT100007381511')

        cy.get('.cc-bottom-input > .h-input__input-wrapper > .h-input__input').type(address)
        cy.get('.cc-bottom-input > .h-input__input-wrapper > .h-input__input').should('have.value', address)
        cy.logging('Entered company address: ' + address)
    }

    submitPayment(){
        cy.get('#hcart-submit-payment').click()
        cy.logging('Submited payment')
    }

    assertError(){
        cy.get(':nth-child(4) > .error-message').should('be.visible')
        cy.logging('Card number error appeared')

        cy.get(':nth-child(5) > .error-message').should('be.visible')
        cy.logging('Validity error appeared')

        cy.get(':nth-child(6) > .error-message').should('be.visible')
        cy.logging('CVC error appeared')
    }

}