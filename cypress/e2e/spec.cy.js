/// <reference types="cypress"/>

import { HomePage } from "../support/Pages/homePage"
import { signUpPage } from "../support/Pages/signUpPage";
import { RegistrationSuccess } from "../support/Pages/RegistrationSuccess";

describe('empty spec', () => {
  let userData;
  const homePage= new HomePage();
  const registration= new signUpPage();
  const registrationSuccess = new RegistrationSuccess();

  before('Set up', () => {
    cy.fixture("userData").then(data => {
      userData = data;
    })
  })

  beforeEach(()=>{
    let randomNumber=Math.floor(Math.random()*1000)
    userData.email=`email_test_${randomNumber}@email.com`
  })

  it('Sign up and log in', () => {
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
  })



})