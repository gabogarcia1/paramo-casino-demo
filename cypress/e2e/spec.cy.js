/// <reference types="cypress"/>

import { HomePage } from "../support/Pages/HomePage"
import { SignUpPage } from "../support/Pages/SignUpPage";
import { RegistrationSuccess } from "../support/Pages/RegistrationSuccess";
import { ProfilePage } from "../support/Pages/ProfilePage";

describe('empty spec', () => {
  let userData;
  const homePage= new HomePage();
  const registration= new SignUpPage();
  const registrationSuccess = new RegistrationSuccess();
  const profilePage = new ProfilePage();

  before('Set up', () => {
    cy.fixture("userData").then(data => {
      userData = data;
    })
  })

  beforeEach(()=>{
    let randomNumber=Math.floor(Math.random()*1000)
    userData.email=`email_test_${randomNumber}@email.com`
  })

  it('Sign up and view profile', () => {
    cy.visit('/')
    homePage.clickOnGotIt();
    homePage.clickOnSignUp();
    registration.checkUrl();
    registration.typeEmail(userData.email)
    registration.checkBox();
    registration.selectCurrency(userData.currency[0]);
    registration.typePassword(userData.Password)
    registration.typePasswordConfirmation(userData.Password)
    registration.clickOnNoBonus()
    registration.clickOnCreateAccount()
    registrationSuccess.verifyRegistrationSuccess()
    registrationSuccess.clickOnViewProfile()
    profilePage.checkUrl();
  })



})