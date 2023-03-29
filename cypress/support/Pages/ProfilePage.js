export class ProfilePage {
    constructor() {
        this.url = "cabinet/profile",
        this.featuredGames="//span[contains(text(),'Featured games')]",
        this.myTournaments="//span[contains(text(),'My tournaments')]",
        this.myBonuses="//span[contains(text(),'My bonuses')]",
        this.myAccounts="//span[contains(text(),'My accounts')]",
        this.transactionHistory="//span[contains(text(),'Transaction history')]",
        this.notifications="//span[contains(text(),'Notifications')]",
        this.messages="//span[contains(text(),'Messages')]",
        this.documents="//span[contains(text(),'Documents')]",
        this.logoutButton="//div[@class='form-avatar__right']//following-sibling::a[@href='/user/logout']"
            
    }
    checkUrl() {
        cy.url({ timeout: 10000 }).should('include', this.url)
    }
    goToFeaturedGames(){
        cy.xpath(this.featuredGames).click();
    }
    logout(){
        cy.xpath(this.logoutButton).click()
    }

}