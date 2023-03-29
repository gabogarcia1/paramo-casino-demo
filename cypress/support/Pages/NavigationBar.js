export class NavigationBar {
    constructor() {
        this.arrowIcon = '//div[@class="user-info__profile-name"]//child::i[@class="icon-arrow-filled"]'
        this.goToProfileButton = "//span[contains(text(),'Go to profile')]"
    }
    goToProfile() {
        cy.xpath(this.arrowIcon).click().xpath(this.goToProfileButton).click()
    }

}