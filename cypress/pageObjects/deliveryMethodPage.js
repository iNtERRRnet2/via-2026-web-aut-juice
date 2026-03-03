import { BasePage } from "../pageObjects/basePage";

export class DeliveryMethodPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get standartDelivery()
  {
    return cy.get('#mat-radio-44-input')
  }

  static get proceedButton()
  {
    return cy.get('[aria-label="Proceed to delivery method selection"]')
  }
}