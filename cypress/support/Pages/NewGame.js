export class NewGame {
    constructor() {
        this.url = '/gameGroup/new'
        this.addToFavoriteIcon = "//a[@data-url-add='/player/addFavoriteGame']"
    }
    checkUrl() {
        cy.url({ timeout: 10000 }).should('include', this.url)
    }
    selectGame(gameName) {
        let play = `//img[@alt="${gameName}"]//parent::div//following-sibling::div//child::div[@class="games-item__buttons"]//child::span[text()="Play"]`
        cy.xpath(`//img[@alt="${gameName}"]`).click()

    }
    addToFavorite(gameName) {
        cy.xpath(`//img[@alt="${gameName}"]`).click().xpath(`//p[contains(text(),"${gameName}")]//following-sibling::a[@data-url-add='/player/addFavoriteGame']`, { timeout: 10000 }).click()

    }


}