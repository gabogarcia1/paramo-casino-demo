export class ProfilePage {
    constructor() {
        this.url = "cabinet/profile"
            
    }
    checkUrl() {
        cy.url({ timeout: 10000 }).should('include', this.url)
    }




}