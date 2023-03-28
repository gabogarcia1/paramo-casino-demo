export class RegistrationSuccess {
    constructor() {
        this.urlSuccess = 'registrationSuccess'
        this.viewProfile = '//span[contains(text(),"View Profile")]'

    }
    verifyRegistrationSuccess() {
        cy.url({ timeout: 10000 }).should('include', this.urlSuccess)
    }
    clickOnViewProfile() {
        cy.xpath(this.viewProfile).click
    }
}