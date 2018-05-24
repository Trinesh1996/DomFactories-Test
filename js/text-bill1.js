var textBill = function(){

	var callsTotal = 0
	var smsTotal = 0
	var totalValue = 0


	var callAndSms = function(bill){
		if(bill === 'call'){
			callsTotal += 2.75
		}						

		if(bill === 'sms'){
			smsTotal += 0.75
		}
	}
	
	var callTotal = function(){
		return callsTotal
	}

	var smssTotal = function(){
		return smsTotal
	}

	var totalCallAndSms = function(){
		totalValue = callsTotal + smsTotal
		return totalValue
	}

	var colorLevel = function(){
		if (totalValue >= 50){
			return "danger"
		}
		else if (totalValue >= 30){
			return "warning"
		}
	}

	return {
		bill: textBill,
		callSms: callAndSms,		
		call: callTotal,
		sms: smssTotal,
		total: totalCallAndSms,
		color: colorLevel
	}
}