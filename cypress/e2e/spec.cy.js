/// <reference types="cypress"/>

import { HomePage } from "../support/Pages/HomePage"
import { SignUpPage } from "../support/Pages/SignUpPage";
import { RegistrationSuccess } from "../support/Pages/RegistrationSuccess";
import { ProfilePage } from "../support/Pages/ProfilePage";
import { FeaturedGames } from "../support/Pages/FeaturedGames";
import { NewGame } from "../support/Pages/newGame";
import { NavigationBar } from "../support/Pages/NavigationBar";
describe('Casino demo test', () => {
  let userData;
  const homePage= new HomePage();
  const registration= new SignUpPage();
  const registrationSuccess = new RegistrationSuccess();
  const profilePage = new ProfilePage();
  const featuredGames = new FeaturedGames();
  const newGame = new NewGame();
  const navigationBar=new NavigationBar();
  

  before('Set up', () => {
    cy.fixture("userData").then(data => {
      userData = data;
    })
  })

  beforeEach('Sign up and view profile',()=>{
    let randomNumber=Math.floor(Math.random()*1000)
    userData.ValidUser.email=`email_test_${randomNumber}@email.com`
    /*
    Catpcha verification breaking registration test. 

    Tried using following script, stubbing the captcha. it works but the registration doesn't go through.
      cy.intercept('POST', 'https://www.google.com/recaptcha/api2/reload?k=6LeHQ5wdAAAAAMSLGDSNQiWkSFb66g4w4xJbJXV5', (req) => {
      req.reply({}); 
      })

    */

    cy.visit('/')
    cy.viewport(1250, 882)
    homePage.clickOnGotIt();
    homePage.clickOnSignUp();
    registration.checkUrl();
    registration.typeEmail(userData.ValidUser.email)
    registration.checkBox();
    registration.selectCurrency(userData.ValidUser.currency[0]);
    registration.typePassword(userData.ValidUser.Password)
    registration.typePasswordConfirmation(userData.ValidUser.Password)
    registration.clickOnNoBonus()
    registration.clickOnCreateAccount()


    registrationSuccess.verifyRegistrationSuccess()
    registrationSuccess.clickOnViewProfile()
    profilePage.checkUrl();
  })

  it('Add favorite game', () => {
    profilePage.checkUrl();
    profilePage.goToFeaturedGames();
    featuredGames.checkUrl();
    featuredGames.goToNewGame()
    newGame.checkUrl();
    newGame.addToFavorite("Hell Hot 20")
    navigationBar.goToProfile()
    profilePage.checkUrl();
    profilePage.goToFeaturedGames();
    featuredGames.verifyFavoriteGames("Hell Hot 20")
    navigationBar.goToProfile()
  })
afterEach(()=>{
  profilePage.logout()
})



})