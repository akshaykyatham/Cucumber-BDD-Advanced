import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import minisiteFeaturePage from "../../../pages/minisiteFeaturePage";

const minisiteFeaturePagePOM = new minisiteFeaturePage()

before(() => {
    cy.fixture('Products.json').as('user');
})

Given('user navigates to minisites "url"',function(){
cy.visit("/#/");
})

Then('user click on the features menu',function(){
    minisiteFeaturePagePOM.getFeaturesMenu().click();
})

Then('user click on the try it out button',function(){
    minisiteFeaturePagePOM.getTryItOut().click();
})

Then('user enter the email id',function(){
    minisiteFeaturePagePOM.getEmail().type("akshay.kyatham@mastercard.com");
})

Then('user click on the validate button',function(){
    minisiteFeaturePagePOM.getvalidateButton().click();
})



When('user enters Username and password',function(){
    productCheckoutPOM.login(this.user.USERNAME, this.user.PASSWORD);
})
Then('user click login button',function(){
    productCheckoutPOM.getLogin().click();
})
Then('user navigate to the Products page',function(){
    productCheckoutPOM.getProductPage().should('be.visible');

})
Then('user click on add to cart',function(){
productCheckoutPOM.getCartButton().click();
})
Then('user click on container button',function(){
productCheckoutPOM.getContainerButton().click();
})
Then('user click on checkout button',function(){
productCheckoutPOM.getCheckOutButton().click();
})
Then('user fill the on checkout information',function(){
productCheckoutPOM.fillCheckoutInfo(this.user.FIRSTNAME, this.user.LASTNAME, this.user.POSTALCODE);
})

Then('user click on continue button',function(){
    productCheckoutPOM.getContinueButton().click();
})

Then('user click on finish button',function(){
    productCheckoutPOM.getFinishButton().click();

})

Then("user Verify Conformation of Order",function(){
   productCheckoutPOM.getConfirmationMSg();
})