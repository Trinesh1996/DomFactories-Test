var radioButton = function(){
	var callsTotal = 0;
	var smsTotal = 0;
	var total = 0;

var callsAndSms = function(btn){
	if(btn == "call"){
		callsTotal += 2.75
	}
	else if(btn == "sms"){
		smsTotal += 0.75
	}
}

var totalCalls = function(){
	return callsTotal
}
var totalSms = function(){
	return smsTotal
}

var totalCallAndSms = function(){
	total = callsTotal + smsTotal
	return total
}

var colorLevel = function(){
	if(total >= 50){
		return "danger"
	}

	else if(total >= 30){
		return "warning"
	}
}

return {
		callSms: callsAndSms,
		call: totalCalls,
		sms: totalSms,
		grandTotal: totalCallAndSms,
		color: colorLevel
	}
}

