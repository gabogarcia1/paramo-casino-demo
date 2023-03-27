export class signUpPage {
    constructor() {
        this.url='user/registration'
        this.checkbox='//label[@for="core__protected_modules_user_yiiForm_RegistrationForm_terms_and_conditions"]'
        this.emailInput='//input[@type="email"]'
        this.password='//input[@name="core__protected_modules_user_yiiForm_RegistrationForm[password]"]'
        this.passwordConfirmation='//input[@name="core__protected_modules_user_yiiForm_RegistrationForm[password_confirmation]"]'
        this.currencyField='//select[@id="core__protected_modules_user_yiiForm_RegistrationForm_currency"]'
        this.noBonusButton='//label[@for="bonus-0"]'
        this.createAccount='//button[@type="submit"]'


    
    }
    checkUrl(){
        cy.url({timeout:10000}).should('include',this.url)
    }
    typeEmail(email){
        cy.xpath(this.emailInput).type(`${email}`)
    }
    checkBox(){
        cy.xpath(this.checkbox).click()
    }
    selectCurrency(currency){
        cy.xpath(this.currencyField).select(`${currency}`,{force: true})
    }
    typePassword(password){
        cy.xpath(this.password).type(`${password}`)
    }
    typePasswordConfirmation(password){
        cy.xpath(this.passwordConfirmation).type(`${password}`)
    }
    clickOnNoBonus(){
        cy.xpath(this.noBonusButton).click()
    }
    clickOnCreateAccount(){
        cy.xpath(this.createAccount).click()
    }
    

}