$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:/C:/ProjectMobiliciti/src/test/resources/Checkout.feature");
formatter.feature({
  "name": "To automate mobileciti shopping",
  "description": "  I want to use this template for my feature file",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To checkout the product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user must be in mobileciti web page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_must_be_in_mobileciti_web_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must select the category",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_must_select_the_category()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must select the product",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_must_select_the_product()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user must be enter checkout details",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_must_be_enter_checkout_details()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d98.0.4758.102)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-35A5AUV\u0027, ip: \u0027192.168.0.103\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_311\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 98.0.4758.102, chrome: {chromedriverVersion: 98.0.4758.102 (273bf7ac8c90..., userDataDir: C:\\Users\\JP\\AppData\\Local\\T...}, goog:chromeOptions: {debuggerAddress: localhost:57710}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: d52ba31ff24aef56f60f12177bd2d175\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.sendKeys(RemoteWebElement.java:106)\r\n\tat org.userlab.UtilityBaseClass.fillValues(UtilityBaseClass.java:51)\r\n\tat org.stepdefinition.StepDefinition.user_must_be_enter_checkout_details(StepDefinition.java:46)\r\n\tat ✽.user must be enter checkout details(file:/C:/ProjectMobiliciti/src/test/resources/Checkout.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "user must be to click place order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_must_be_to_click_place_order()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});