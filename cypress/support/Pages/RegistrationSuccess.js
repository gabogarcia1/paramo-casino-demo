export class RegistrationSuccess {
    constructor() {
        this.urlSuccess = 'registrationSuccess'
        this.viewProfile = '//span[contains(text(),"View profile")]'

    }
    verifyRegistrationSuccess() {
        cy.url({ timeout: 20000 }).should('include', this.urlSuccess)
    }
    clickOnViewProfile() {
        cy.xpath(this.viewProfile).click()
    }
}