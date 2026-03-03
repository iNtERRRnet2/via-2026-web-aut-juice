import { BasePage } from "../pageObjects/basePage";

export class OrderCompletionPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get confirmationText()
  {
    return cy.get('[class="order-completion-header"]')
  }
}