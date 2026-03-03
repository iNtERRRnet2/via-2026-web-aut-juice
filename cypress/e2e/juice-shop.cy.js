import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegistrationPage } from "../pageObjects/registrationPage";
import { SavedAddressPage } from "../pageObjects/savedAddressPage";
import { CreateAddressPage } from "../pageObjects/createAddressPage";
import { SavedPayementMethodsPage } from "../pageObjects/savedPayementMethodsPage";
import { BasketPage } from "../pageObjects/basketPage";
import { SelectAddressPage } from "../pageObjects/selectAddressPage";
import { DeliveryMethodPage } from "../pageObjects/deliveryMethodPage";
import { PaymentOptionsPage } from "../pageObjects/paymentOptionsPage";
import { OrderSummaryPage } from "../pageObjects/orderSummaryPage";
import { OrderCompletionPage } from "../pageObjects/orderCompletionPage";

describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailField.type("demo");
      // Set password value to "demo"
      LoginPage.passwordField.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userProfileButton.should('contain.text', 'demo');
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button9
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      const email = `email_${Math.floor(Math.random() * 10000)}@ebox.com`;
      const password = 'randomPassword34950';
      // Save that email address to some variable
      RegistrationPage.emailField.type(email);
      // Fill in password field and repeat password field with same password
      RegistrationPage.passwordField.type(password);
      RegistrationPage.repeatPasswordField.type(password);
      // Click on Security Question menu
      RegistrationPage.sequrityQuestionMenu.click();
      // Select  "Name of your favorite pet?"
      RegistrationPage.dropdownMenuOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegistrationPage.securityAnswerField.type("Dog");
      // Click Register button
      RegistrationPage.registrationButton.click();
      // Set email value to previously created email
      LoginPage.emailField.type(email);
      // Set password value to previously used password value
      LoginPage.passwordField.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userProfileButton.should('contain.text', email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchButton.click();
      // Search for Lemon
      HomePage.searchField.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    });

    // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCards.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    })

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for 500ml
    HomePage.searchField.type("500ml{enter}");
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.productCards.contains("Eggfruit Juice (500ml)").click();
    // Validate that the card (should) contains "Now with even more exotic flavour."
    HomePage.productCard.should("contain.text", "Now with even more exotic flavour.");
    // Close the card
    HomePage.closeCardButton.click();
    // Select a product card - Lemon Juice (500ml)
    HomePage.productCards.contains("Lemon Juice (500ml)").click();
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.productCard.should("contain.text", "Sour but full of vitamins.")
    // Close the card
    HomePage.closeCardButton.click();
    // Select a product card - Strawberry Juice (500ml)
    HomePage.productCards.contains("Strawberry Juice (500ml)").click();
    // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.productCard.should("contain.text", "Sweet & tasty!")
    })

    // Create scenario - Read a review
    it("Read a review", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for King
    HomePage.searchField.type("King{enter}");
    // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
    HomePage.productCards.contains('OWASP Juice Shop "King of the Hill" Facemask').click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
    HomePage.reviwBox.should("contains.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!");
    })

    // Create scenario - Add a review
    it("Add a reviw", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Raspberry
    HomePage.searchField.type("Raspberry{enter}");
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.productCards.contains('Raspberry Juice (1000ml)').click();
    // Type in review - "Tastes like metal"
    HomePage.reviewTextBox.type("Tastes like metal");
    // Click Submit
    HomePage.submitButton.click();
    // Click expand reviews button/icon (wait for reviews to appear)
    HomePage.expandReviews.click();
    // Validate review -  "Tastes like metal"
    HomePage.reviwBox.should("contains.text", "Tastes like metal");
    })

    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.comboBoxDefault.should("contains.text", "12")
    // Change items per page (at the bottom of page) to 24
    HomePage.comboBox.click();
    HomePage.comboBoxSecondary.click();
    // Validate that the amount of cards is 24
    HomePage.comboBoxDefault.should("contains.text", "24");
    // Change items per page (at the bottom of page) to 36
    HomePage.comboBox.click();
    HomePage.comboBoxTrinary.click();
    // Validate that the amount of cards is 36
    HomePage.comboBoxDefault.should("contains.text", "36");
    })

    // Create scenario - Buy Girlie T-shirt
    it.only("Buy Girlie T-shirt", () => {
    // Click on search icon
    HomePage.searchButton.click();
    // Search for Girlie
    HomePage.searchField.type("Girlie{enter}");
    // Add to basket "Girlie"
    HomePage.addToCartButton.click();
    // Click on "Your Basket" button
    HomePage.cartButton.click();
    // Create page object - BasketPage
    // Click on "Checkout" button
    BasketPage.checkOutButton.click();
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    SelectAddressPage.savedAddress.find('[type="radio"]').click();
    // Click Continue button
    SelectAddressPage.proceedButton.click();
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    DeliveryMethodPage.standartDelivery.click();
    // Click Continue button
    DeliveryMethodPage.proceedButton.click();
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    PaymentOptionsPage.selectPaymentOption.find('[type="radio"]').click();
    // Click Continue button
    PaymentOptionsPage.proceedButton.click();
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    OrderSummaryPage.proceedButton.click();
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    OrderCompletionPage.confirmationText.should("contain.text", "Thank you for your purchase!")
    })

    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.OaPButton.click();
    // Click on My saved addresses
    HomePage.savedAddressesButton.click();
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    SavedAddressPage.createAddressButton.click();
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    CreateAddressPage.countryField.type("United Fakedom");
    CreateAddressPage.nameField.type("John Mail");
    CreateAddressPage.numberField.type("01928374");
    CreateAddressPage.zipField.type("UF-3457");
    CreateAddressPage.addressField.type("The nearest cave from Birdmingham");
    CreateAddressPage.cityField.type("Birdmingham");
    // Click Submit button
    CreateAddressPage.submitButton.click();
    // Validate that previously added address is visible
    SavedAddressPage.savedAddress.should("contain.text", "United Fakedom");
    })

    // Create scenario - Add payment option
    it("Add payment option", () => {
    // Click on Account
    HomePage.accountButton.click();
    // Click on Orders & Payment
    HomePage.OaPButton.click();
    // Click on My payment options
    HomePage.savedPayementOptionsButton.click();
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    SavedPayementMethodsPage.addNewCardManu.click();
    // Fill in Name
    SavedPayementMethodsPage.nameField.type("John Mail");
    // Fill in Card Number
    SavedPayementMethodsPage.cardNumberField.type("01897329841285678");
    // Set expiry month to 7
    SavedPayementMethodsPage.monthField.select("7");
    // Set expiry year to 2090
    SavedPayementMethodsPage.yearField.select("2090");
    // Click Submit button
    SavedPayementMethodsPage.submitButton.click();
    // Validate that the card shows up in the list
    SavedPayementMethodsPage.cardNumber.should("contain.text", "5678")
    })
  });
});