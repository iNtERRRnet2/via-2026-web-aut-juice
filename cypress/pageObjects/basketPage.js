import { BasePage } from "../pageObjects/basePage";

export class BasketPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get checkOutButton()
  {
    return cy.get('#checkoutButton')
  }
}