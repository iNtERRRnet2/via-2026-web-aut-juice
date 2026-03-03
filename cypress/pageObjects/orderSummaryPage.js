import { BasePage } from "../pageObjects/basePage";

export class OrderSummaryPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get proceedButton()
  {
    return cy.get('[aria-label="Complete your purchase"]')
  }
}