package org.userlab;

import java.io.File;
import java.util.ArrayList;
import java.util.List;

import net.masterthought.cucumber.Configuration;
import net.masterthought.cucumber.ReportBuilder;

public class JvmReport {
	
	public static void generateJvmReport(String jsonpath) {

		File f = new File(System.getProperty("user.dir")+"\\src\\test\\resources\\Report\\JvmReport");
		Configuration c=new Configuration(f, "MobileCiti");
		c.addClassifications("Platform", "Windows");
		c.addClassifications("Browser", "Google Chrome");
		c.addClassifications("Sprint No", "15");
		c.addClassifications("user story", "Checkout");
		
		List<String> jsonfile=new ArrayList<String>();
		jsonfile.add(jsonpath);
		
		ReportBuilder r=new ReportBuilder(jsonfile, c);
		r.generateReports();
	}

}
