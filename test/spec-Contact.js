var util = require ('util')

describe ("Protractor Dashborad page", function(){
				
    var data = require('../data/data.js');
    var name = 'QA Analysit-'+Math.floor(Date.now() / 1000);
    var company = 'QA Company-'+Math.floor(Date.now() / 1000);
    var email = 'QA-'+Math.floor(Date.now() / 1000)'-test@mailinator.com';
    var message = 'I'm not able-'+Math.floor(Date.now() / 1000);				
	
    it('should able to contact', function(){
		data.projectUrl();
		browser.ignoreSynchronization = true;
		browser.sleep(10000);
        element(by.xpath('//span[contains(text(),"Continue to the Crunchinator")]')).click();
		browser.sleep(10000);
		  browser.executeScript('window.scrollTo(0,4000);').then(function() {
            browser.sleep(3000);
        });
								var About = element(by.linkText('About Us'));
								expect(About.getText()).toEqual('About Us');
								browser.sleep(1000);
								var Faq = element(by.linkText('F.A.Q'));
								expect(Faq.getText()).toEqual('F.A.Q');
								browser.sleep(1000);
								expect(element(by.xpath('//*[@id="contact-us"]/a')).getText()).toBe('Contact Us');
								element(by.xpath('//*[@id="contact-us"]/a')).click();
								expect(element(by.css('.uppercase')).getText()).toBe("LET'S TALK");
								element(by.id('name')).sendKeys(name);
								element(by.name('company')).sendKeys(company);
								element(by.name('email')).sendKeys(email);
								element(by.name('phone')).sendKeys('123456789');
								element(by.name('message')).sendKeys(message);
								element(by.id('submit')).click();				
		});
});