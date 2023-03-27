export class HomePage {
    constructor() {
        this.signUp = "//span[contains(text(),'Sign up')]",
            this.signIn = "//span[contains(text(),'Sign in')]"
    }

    clickOnSignIn() {
        cy.get(this.signIn).click()
    }
    clickOnSignUp() {
        cy.get(this.signUp).click()
    }

}