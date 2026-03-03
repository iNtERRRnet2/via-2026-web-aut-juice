import { BasePage } from "../pageObjects/basePage";

export class PaymentOptionsPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get selectPaymentOption()
  {
    return cy.contains('mat-row', '5678')
  }

  static get proceedButton()
  {
    return cy.get('[aria-label="Proceed to review"]')
  }
}