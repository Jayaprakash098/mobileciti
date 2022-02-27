package org.runner;

import org.junit.AfterClass;
import org.junit.runner.RunWith;
import org.userlab.JvmReport;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features = "@src\\\\test\\\\resources\\\\Rerun\\\\faile.txt", 
glue = "org.stepdefinition", dryRun = false, monochrome = false , strict = false, tags = { "@tag1" } ,
plugin = {"html:src\\test\\resources\\Report",
		"json:src\\test\\resources\\Report\\mobileciti.json",
	"junit:src\\test\\resources\\Report\\mobileciti.xml",
	"rerun:\\src\\test\\resources\\Rerun\\faile.txt"})


public class TestReRunner {

	@AfterClass
	public static void jvmReport() {
		JvmReport.generateJvmReport(System.getProperty("user.dir")+"\\src\\test\\resources\\Report\\JvmReport\\mobileciti.json");
	}
}
