describe("Radio Bill Test", function(){
	

	it("should return ammount of calls made equal to 2.75", function(){
		var radioBill = radioButton();		
		radioBill.callSms("call");
		assert.equal(radioBill.call(), 2.75)
	})

	it("should return ammount of calls made equal to R5.50", function(){
		var radioBill = radioButton();
		radioBill.callSms("call");
		radioBill.callSms("call");
		assert.equal(radioBill.call(), 5.50);

	})

	it("should return ammount of sms made equal to R0.75", function(){
		var radioBill = radioButton();
		radioBill.callSms("sms")		
		assert.equal(radioBill.sms(), 0.75);
		
	})
	it('should return ammount of sms made equal to R1.50', function(){
		var radioBill = radioButton();
		radioBill.callSms("sms");
		radioBill.callSms("sms");
		assert.equal(radioBill.sms(), 1.50)
	});

	it("should return total call and sms amount of R7.00", function(){
		var radioBill = radioButton();
		radioBill.callSms("sms")
		radioBill.callSms("sms")
		radioBill.callSms("call")
		radioBill.callSms("call")
		assert.equal(radioBill.grandTotal(), 7.00)

	})
});