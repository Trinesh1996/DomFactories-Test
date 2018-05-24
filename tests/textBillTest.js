describe('Text Bill', function(){	  

    it("should return number of calls", function(){
    	var callsAndSms = textBill();    	      
        callsAndSms.callSms('call')
        callsAndSms.callSms('call')
        assert.equal(callsAndSms.call(), 5.50);
    });

    it("Should return number of sms", function(){
    	var callsAndSms = textBill();
    	callsAndSms.callSms('sms')
    	callsAndSms.callSms('sms')
    	assert.equal(callsAndSms.sms(), 1.5)
    });

    it("Should return total ammount of calls and sms's", function(){
        var callsAndSms = textBill();
        callsAndSms.callSms('sms')
        callsAndSms.callSms('call')
        callsAndSms.callSms('sms')
        assert.equal(callsAndSms.total(), 4.25)
    });
});

//     it("it checks if total is > 50 return danger", function(){
//         var callsAndSms = textBill();
        
//         assert.equal(callsAndSms.color(), "danger");

//     });
// });

