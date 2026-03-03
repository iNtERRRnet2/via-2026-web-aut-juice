import { BasePage } from "../pageObjects/basePage";

export class CreateAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get countryField()
  {
    return cy.get('#mat-input-2')
  }

  static get nameField()
  {
    return cy.get('#mat-input-3')
  }

  static get numberField()
  {
    return cy.get('#mat-input-4')
  }

  static get zipField()
  {
    return cy.get('#mat-input-5')
  }

  static get addressField()
  {
    return cy.get('#address')
  }

  static get cityField()
  {
    return cy.get('#mat-input-7')
  }

  static get submitButton()
  {
    return cy.get('#submitButton')
  }
}