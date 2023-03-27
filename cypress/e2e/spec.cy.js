/// <reference types="cypress"/>

import { HomePage } from "../support/Pages/homePage"

describe('empty spec', () => {
  let userData;
  before('Set up', () => {
    cy.fixture("userData").then(data => {
      userData = data;
    })
  })

  it('passes', () => {
    cy.visit('https://demo.casino/')
  })



})