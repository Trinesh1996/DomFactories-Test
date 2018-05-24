describe("Settings Bill test", function(){
	it("returns call total of R4 when two calls are made and call amount equals R2", function(){
		var settings = settingBill();
		settings.floatCall(2);
		settings.callSms("call")
		settings.callSms("call")
		assert.equal(settings.call(), 4)
	});
	it("returns call total of R10 when two calls are made and call amount equals R5", function(){
		var settings = settingBill();
		settings.floatCall(5);
		settings.callSms("call")
		settings.callSms("call")
		assert.equal(settings.call(), 10)
	})
	it('returns sms total of R8 when four sms are made and sms amount eauals R2', function(){
		var settings =settingBill();
		settings.floatSms(2);
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		assert.equal(settings.sms(), 8)
	})

	it('returns sms total of R15 when 5 sms are made and sms amount equals R3', function(){
		var settings =settingBill();
		settings.floatSms(3);
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		assert.equal(settings.sms(), 15)
	})


	it('returns grand total of R20 of calls and sms made.', function(){
		var settings =settingBill();
		settings.floatSms(5);
		settings.floatCall(5)
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("sms")
		settings.callSms("call")
		assert.equal(settings.grandTotal(), 20)
	})

	it('returns call value x', function(){
		var settings = settingBill();
		settings.floatCall(4)
		settings.callSms("call")
		assert.equal(settings.call(), 4)
	})
		it('returns sms value x', function(){
		var settings = settingBill();
		settings.floatSms(4)
		settings.callSms("sms")
		assert.equal(settings.sms(), 4)
	})

	it('returns true when critcal level reaches float value of R10', function(){
		var settings = settingBill()
        settings.floatCall(2);
        for (var i = 0; i < 5; i++){
        	settings.callSms('call')
        }
        settings.grandTotal(10);
        assert.equal(settings.stopCritical(), true)
    });

    it('returns true when critcal level reaches float value of R20', function(){
		var settings = settingBill()
        settings.floatCall(2);
        settings.floatSms(2)
        for (var i = 0; i < 5; i++){
        	settings.callSms('call')
        	settings.callSms("sms")
        }
        settings.grandTotal(20);
        assert.equal(settings.stopCritical(), true)
    });

    it("returns warning when total exeeds warning threshold", function(){
    	var settings = settingBill();
    	settings.floatCall(2)
    	settings.floatSms(2)
    	settings.warning(15)
    	settings.critical(30)

    	for(var i=0; i<5; i++){
    		settings.callSms('call')
    		settings.callSms('sms')
    	}

    	assert.equal(20, settings.grandTotal());
    	assert.equal("warning", settings.color())
    });


    it("returns danger when total exeeds danger threshold", function(){
    	var settings = settingBill();
    	settings.floatCall(2)
    	settings.floatSms(2)
    	settings.warning(15)
    	settings.critical(30)

    	for(var i=0; i<5; i++){
    		settings.callSms('call')
    		settings.callSms('sms')
    		settings.callSms('sms')
    	}

    	assert.equal(30, settings.grandTotal());
    	assert.equal("danger", settings.color())
    });



});
