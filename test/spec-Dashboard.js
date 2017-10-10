var util = require ('util')

describe ("Protractor dashboard page", function(){
				
    var data = require('../data/data.js'); 
	
    it('should able to dashboard', function(){
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
		  var AboutUsHeading = element(by.xpath('//*[@id="pop-quiz"]/h3'));
				expect(AboutUsHeading.getText()).toEqual('Time for a Pop Quiz, Why did we (Cloudspace) build the Crunchinator');
    });
});