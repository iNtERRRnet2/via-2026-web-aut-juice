import { BasePage } from "../pageObjects/basePage";

export class SelectAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get savedAddress()
  {
    return cy.contains('mat-row', 'United Fakedom')
  }

  static get proceedButton()
  {
    return cy.get('[aria-label="Proceed to payment selection"]')
  }
}