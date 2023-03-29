export class HomePage {
    constructor() {
        this.signUp = "//span[contains(text(),'Sign up')]",
            this.signIn = "//span[contains(text(),'Sign in')]",
            this.welcomeSignGotIt = "//span[contains(text(),'Got it')]"
    }

    clickOnSignIn() {
        cy.xpath(this.signIn).click()
    }
    clickOnGotIt() {
        cy.xpath(this.welcomeSignGotIt).click();
    }
    clickOnSignUp() {
        cy.xpath(this.signUp).click()
    }

}