import { BasePage } from "../pageObjects/basePage";

export class SavedAddressPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get createAddressButton()
  {
    return cy.get('[aria-label="Add a new address"]')
  }

  static get savedAddress()
  {
    return cy.get('[class*="mat-column-Country"]')
  }
}