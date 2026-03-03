import { BasePage } from "../pageObjects/basePage";

export class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get accountButton()
  {
    return cy.get("#navbarAccount")
  }

  static get loginButton()
  {
    return cy.get("#navbarLoginButton")
  }

  static get userProfileButton()
  {
    return cy.get("button[aria-label='Go to user profile']")
  }

  static get searchButton()
  {
    return cy.get("#searchQuery")
  }

  static get searchField()
  {
    return cy.get("#mat-input-1")
  }

  static get productCards()
  {
    return cy.get("[aria-label='Click for more information about the product']")
  }

  static get productCard()
  {
    return cy.get("[class*='mdc-dialog__content']")
  }

  static get closeCardButton()
  {
    return cy.get("[aria-label='Close Dialog']");
  }

  static get expandReviews()
  {
    return cy.get('[aria-label="Expand for Reviews"]')
  }

  static get reviwBox()
  {
    return cy.get('[class="ng-star-inserted"]')
  }

  static get reviewTextBox()
  {
    return cy.get('[aria-label="Text field to review a product"]')
  }

  static get submitButton()
  {
    return cy.get('#submitButton')
  }

  static get comboBox()
  {
    return cy.get('[class="mat-mdc-paginator-touch-target"]')
  }

  static get comboBoxDefault()
  {
    return cy.get('#mat-select-0')
  }

  static get comboBoxSecondary()
  {
    return cy.get('#mat-option-1')
  }

  static get comboBoxTrinary()
  {
    return cy.get('#mat-option-2')
  }

  static get addToCartButton()
  {
    return cy.get('[aria-label="Add to Basket"]')
  }

  static get cartButton()
  {
    return cy.get('[aria-label="Show the shopping cart"]')
  }

  static get OaPButton()
  {
    return cy.get('[aria-label="Show Orders and Payment Menu"]').eq(1)
  }

  static get savedAddressesButton()
  {
    return cy.get('[aria-label="Go to saved address page"]')
  }

  static get savedPayementOptionsButton()
  {
    return cy.get('[aria-label="Go to saved payment methods page"]')
  }
}