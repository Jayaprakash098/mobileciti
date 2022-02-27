package org.stepdefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.userlab.UtilityBaseClass;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class StepDefinition extends UtilityBaseClass{

	
	@Given("user must be in mobileciti web page")
	public void user_must_be_in_mobileciti_web_page() {
		launchUrl("https://www.mobileciti.com.au/");
	    
	}

	@When("user must select the category")
	public void user_must_select_the_category() throws InterruptedException {
		Thread.sleep(10000);
		WebElement category = driver.findElement(By.xpath("//a[@title='Shop by Category']"));
		WebElement mobilephones = driver.findElement(By.xpath("//span[text()='Mobile Phones']"));
		WebElement apple = driver.findElement(By.xpath("(//a[text()='Apple'])[1]"));
		mouseover(category);
		mouseover(mobilephones);
		clickBtn(apple);
	   
	}

	@When("user must select the product")
	public void user_must_select_the_product() {
		WebElement product = driver.findElement(By.xpath("//li[@class='item product product-item nth-child-2n nth-child-3n nth-child-5np1 nth-child-6n']"));
		clickBtn(product);
		WebElement addtocart = driver.findElement(By.xpath("(//button[@title='Add to Cart'])[2]"));
		clickBtn(addtocart);
		WebElement gotocart = driver.findElement(By.xpath("//button[text()='Go To Checkout']"));
		gotocart.click();
	   
	}

	@When("user must be enter checkout details")
	public void user_must_be_enter_checkout_details() {
		WebElement email = driver.findElement(By.xpath("(//input[@type='email'])[2]"));
		fillValues(email, "mathews@gmail.com");
	   
	}

	@Then("user must be to click place order")
	public void user_must_be_to_click_place_order() {
		WebElement placeorder = driver.findElement(By.xpath("(//button[class='action primary checkout'])[7]"));
		clickBtn(placeorder);
	   
	}
	
}
