

Feature: To automate mobileciti shopping
  I want to use this template for my feature file

  @tag1
  Scenario: To checkout the product
    Given user must be in mobileciti web page
    When user must select the category
    And user must select the product
    And user must be enter checkout details
    Then user must be to click place order
 

  @tag2
  Scenario Outline: Title of your scenario outline
    Given I want to write a step with <name>
    When I check for the <value> in step
    Then I verify the <status> in step

    Examples: 
      | name  | value | status  |
      | name1 |     5 | success |
      | name2 |     7 | Fail    |
