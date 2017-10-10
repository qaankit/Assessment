var util = require ('util')

describe ("Protractor FAQ page", function(){
				
    var data = require('../data/data.js'); 
	
    it('should able to FAQ', function(){
		data.projectUrl();
		browser.sleep(10000);
        element(by.xpath('//span[contains(text(),"Continue to the Crunchinator")]')).click();
		browser.sleep(10000);
		  browser.executeScript('window.scrollTo(0,10000);').then(function() {
            browser.sleep(3000);
        });
								var About = element(by.linkText('About Us'));
								expect(About.getText()).toEqual('About Us');
								browser.sleep(1000);
								var Faq = element(by.linkText('F.A.Q'));
								expect(Faq.getText()).toEqual('F.A.Q');
								browser.sleep(1000);
								element(by.linkText('F.A.Q')).click();
		  var FaqHeading = element(by.xpath('//*[@id="faq"]/div[1]/h3'));
				expect(FaqHeading.getText()).toEqual("Seems you've got a couple of questions? Let's chat.");
				var Emailbutton = element(by.linkText('Email us your question'));
				expect(Emailbutton.getText()).toEqual('Email us your question');
				var Sendbutton = element(by.linkText('Send us a tweet'));
				expect(Sendbutton.getText()).toEqual('Send us a tweet');
				var Tweet = element(by.xpath('//*[@id="faq"]/div[1]/ul/li[2]/a')).getAttribute('href');
				element(by.linkText('Send us a tweet')).click();
				browser.ignoreSynchronization = true;
				browser.getAllWindowHandles().then(function(handles) {
   browser.switchTo().window(handles[1]).then(function() {
			var url = browser.getCurrentUrl();
     expect(Tweet).toEqual(url);
			
		});
});
				
				
    });
});