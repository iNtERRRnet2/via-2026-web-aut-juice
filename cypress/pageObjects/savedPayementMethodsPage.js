import { BasePage } from "../pageObjects/basePage";

export class SavedPayementMethodsPage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get addNewCardManu()
  {
    return cy.get('#mat-expansion-panel-header-0')
  }

  static get nameField()
  {
    return cy.get('#mat-input-2')
  }

  static get cardNumberField()
  {
    return cy.get('#mat-input-3')
  }

  static get monthField()
  {
    return cy.get('#mat-input-4')
  }

  static get yearField()
  {
    return cy.get('#mat-input-5')
  }

  static get submitButton()
  {
    return cy.get('#submitButton')
  }

  static get cardNumber()
  {
    return cy.get('[class="mat-mdc-cell mdc-data-table__cell cdk-cell cdk-column-Number mat-column-Number ng-star-inserted"]')
  }
}