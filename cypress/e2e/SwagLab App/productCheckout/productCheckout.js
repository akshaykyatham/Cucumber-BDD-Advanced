import { Given,When,Then } from "@badeball/cypress-cucumber-preprocessor";
import productCheckoutPage from "../../../pages/productCheckoutPage";

const productCheckoutPOM = new productCheckoutPage()

before(() => {
    cy.fixture('Products.json').as('user');
})

Given('user navigates to "url"',function(){
cy.visit("/#/");
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