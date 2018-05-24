describe('Calculate Bill Test ', function(){
    it('return number of calls equal to R5.50', function(){
        assert.equal(calculateBtnClick('call,call'), 5.50);
    });

    it('return number of sms equal to R1.95', function(){
        assert.equal(calculateBtnClick('sms,sms,sms'), 1.95);
    });

    it('return number of sms and equal to R4.70', function(){
        assert.equal(calculateBtnClick('sms,sms,sms,call'), 4.70);
    });
  });
