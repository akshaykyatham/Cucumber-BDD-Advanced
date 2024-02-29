export default class productCheckoutPage {
  constructor(){
      this.UserName ='input[id="user-name"]'
      this.Password ='input[type="password"]'
      this.Login ='#login-button'
      this.ProductPage=".product_label"
      this.CartButton='div:nth-child(1) > div.pricebar > button'
      this.CartButtons="[class*='btn_inventory']"
      this.ContainerButton='.shopping_cart_badge'
      this.CheckOutButton='a[class="btn_action checkout_button"]'
      this.FirstName='[data-test="firstName"]'
      this.LastName='[data-test="lastName"]'
      this.PostalCode='[data-test="postalCode"]'
      this.ContinueButton='input[value="CONTINUE"]'
      this.FinishButton='a[class="btn_action cart_button"]'
  }

  getUserName(){

      return cy.get(this.UserName)
  }
  getPassword(){
      return cy.get(this.Password)
  }
  getLogin(){
      return cy.get(this.Login)
  }
  getProductPage(){
  return cy.get(this.ProductPage)
  }
  getCartButton(){
  return cy.get(this.CartButton)
  }
  getCartButtons(){
  return cy.get(this.CartButtons)
  }
 getContainerButton(){
  return cy.get(this.ContainerButton)
 }
 getCheckOutButton(){
  return cy.get(this.CheckOutButton)
 }
 getFirstName(){
  return cy.get(this.FirstName)
 }
 getLastName(){
  return cy.get(this.LastName)
 }
 getPostalCode(){
  return cy.get(this.PostalCode)
 }
getContinueButton(){
  return cy.get(this.ContinueButton)
 }
 getFinishButton(){
  return cy.get(this.FinishButton)
}
login(userName, password) {
   this.getUserName().type(userName);  
   this.getPassword().type(password);
}

fillCheckoutInfo(firstName, lastName, postalCode) {

      this.getFirstName().type(firstName);

      this.getLastName().type(lastName);

      this.getPostalCode().type(postalCode);
}
getConfirmationMSg(){
  return cy.get('.complete-header').then(function(e){
    const t =e.text()
    expect(t).to.contain('THANK YOU FOR YOUR ORDER')
  })
}
}
