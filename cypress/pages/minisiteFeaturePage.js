
export default class minisiteFeaturePage {
    constructor(){

      this.FeatureMenu ='div[data-testid="header-component--links"]:nth-child(1) button'
      this.TryItOut = 'button[data-testid="feature-card-button-text"]'
      this.Email = 'input[name="businessemail"]'
      this.ValidationButton = '.made-u-justify-content-end > button'
    }
  // Locators

  getFeaturesMenu() {
    return cy.get(this.FeatureMenu);
  }

  getTryItOut() {

    return cy.get(this.TryItOut);

  }

  getEmail() {

    return cy.get(this.Email);
  }

  getvalidateButton() {

    return cy.get(this.ValidationButton);

  }
}
