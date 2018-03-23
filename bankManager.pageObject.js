var BankManager = function() {
    var EC = protractor.ExpectedConditions;
    // bank manager login
    var BankManagerLogin = element(by.buttonText('Bank Manager Login'));
    var addCostumerBtn = element(by.buttonText('Add Customer'));
    var fName = element(by.model('fName'));
    var lName = element(by.model('lName'));
    var postCd = element(by.model('postCd'));
    var submit = element(by.css('[type="submit"]'));
    //open account
    var openAcc = element(by.buttonText('Open Account'));
    var gipszJakab = element(by.cssContainingText('option', 'Gipsz Jakab'));
    var dollar = element(by.cssContainingText('option', 'Dollar'));
    var homeBtn = element(by.buttonText('Home'));

    this.getLoginPage = function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    }

    this.bankManagerLogin = function() {
        
        BankManagerLogin.click();
        addCostumerBtn.click();
        browser.sleep(1000);
        fName.sendKeys('Gipsz');
        lName.sendKeys('Jakab');
        postCd.sendKeys('1234');
        submit.click();
        browser.sleep(1000);
        browser.switchTo().alert().accept();
    }

    this.openAccount = function() {
        openAcc.click();
        gipszJakab.click();
        dollar.click();
        submit.click();
        browser.sleep(1000);
        browser.switchTo().alert().accept();
        homeBtn.click();
        browser.sleep(1000);
    }

}
module.exports = new BankManager();