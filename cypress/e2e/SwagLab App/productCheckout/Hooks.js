beforeEach(function(){
    cy.fixture('Products').then(function(data){
       this.data= data
    })
})