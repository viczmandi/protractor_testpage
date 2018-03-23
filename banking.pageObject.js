var Banking = function() {

    //costumer login
    var customerLogin = element(by.buttonText('Customer Login'));
    var newAccount = element(by.cssContainingText('option', 'Gipsz Jakab'));
    var loginBtn = element(by.buttonText('Login'));
    var loginSuccess = element(by.css('[class="fontBig ng-binding"]'));
    //deposite money
    var depositeBtn = element(by.buttonText('Deposit'));
    var amount = element(by.model('amount'));
    var submitAmount = element(by.css('[type="submit"]'));
    var depositSuccess = element(by.css('[class="error ng-binding"]'));
    //checking transaction list
    var transactionBtn = element(by.buttonText('Transactions'));
    var sortTable = element(by.css(`[ng-click="sortType = 'date'; sortReverse = !sortReverse"]`));
    var trAmount = element(by.xpath('//*[@id="anchor0"]/td[2]'));
    //customer logout
    var logoutBtn = element(by.buttonText('Logout'));
    var homeBtn = element(by.buttonText('Home'));

    this.customerLogin = function() {
        customerLogin.click();
        newAccount.click();
        loginBtn.click();
        return loginSuccess.getText();
    }

    this.depositeMoney = function(money) {
        depositeBtn.click();
        amount.sendKeys(money);
        browser.sleep(1000);
        submitAmount.click();
        return depositSuccess.getText();
    }

    this.checkingTrList = function() {
        browser.sleep(1000);
        transactionBtn.click();
        browser.sleep(1000);
        sortTable.click();
        browser.sleep(1000);
        return trAmount.getText();
    }

    this.logout = function() {
        logoutBtn.click();
        homeBtn.click();
        browser.sleep(1000);
    }
}
module.exports = new Banking();