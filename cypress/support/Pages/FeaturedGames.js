export class FeaturedGames {
    constructor() {
        this.url = "/favoriteGames"
        this.newGame="//a[contains(@href,'/gameGroup/new')]//parent::div[@role='group']"

    }
    checkUrl() {
        cy.url({ timeout: 10000 }).should('include', this.url)
    }
    goToNewGame(){
        cy.xpath(this.newGame).click()
    }
    
    verifyFavoriteGames(gameName){
        cy.xpath(`//p[contains(text(),"${gameName}")]`).should("have.length",'1')
    }


}