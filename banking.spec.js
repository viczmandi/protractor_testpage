var bankingPage = require('./banking.pageObject');
var bankManager = require('./bankManager.pageObject');

describe('XYZ Bank: bank manager', function() {

    it('bank manager login', function() {
        bankManager.getLoginPage();
        bankManager.bankManagerLogin();
    });

    it('open account', function() {
        bankManager.openAccount();
    });
});

describe('XYZ Bank: login, deposite, list, logout', function() {
    var amount = '1000';

    it('costumer login', function() {      
        expect(bankingPage.customerLogin()).toEqual('Gipsz Jakab');
    });

    it('deposite money', function() {
        expect(bankingPage.depositeMoney(amount)).toEqual('Deposit Successful');
    });

    it('checking transaction list', function() {
        expect(bankingPage.checkingTrList()).toContain(amount);
    });

    it('customer logout', function() {
        bankingPage.logout();
        expect(browser.getCurrentUrl()).toEqual('http://www.way2automation.com/angularjs-protractor/banking/#/login');
    })
});