Feature: Minisite Feature

  Scenario: Verify User able to validate the email from the features menu
    Given user navigates to minisites "url"
    When user click on the features menu
    And user click on the try it out button
    And user enter the email id
    And user click on the validate button
