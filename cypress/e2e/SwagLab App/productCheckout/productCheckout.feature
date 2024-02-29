Feature: Product Checkout Feature

  Scenario: Verify User able to checkout the Product
    Given user navigates to "url"
    When user enters Username and password
    And user click login button
    Then user navigate to the Products page
    Then user click on add to cart
    Then user click on container button
    Then user click on checkout button
    And user fill the on checkout information
    Then user click on continue button
    Then user click on finish button
    And user Verify Conformation of Order
