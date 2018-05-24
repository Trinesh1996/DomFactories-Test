var settingBill = function(){
	var callCosts = 0;
	var smsCosts = 0;	
	var criticalLevel = 0;
	var warningLevel = 0;
	var callsTotal = 0;
	var smsTotal = 0;
	var total = 0;


var callFloat = function(float){
	if(float !== undefined){
		callCosts = parseFloat(float)
	}
}
var smsFloat = function(float){
	if(float !== undefined){
		smsCosts = parseFloat(float)
	}
}
var criticalLevelFloat = function(float){
	if(float !== undefined){
		criticalLevel = parseFloat(float)		
	}
}
var warningLevelFloat = function(float){
	if(float !== undefined){
		warningLevel = parseFloat(float)		
	}
}

var callsAndSms = function(butn){
	if(butn == "call"){
		callsTotal += callCosts
	}
	else if(butn == "sms"){
		smsTotal += smsCosts
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
	if(total >= criticalLevel){
		return "danger"
	}

	else if(total >= warningLevel){
		return "warning"
	}
}

var criticalStop = function(){
	return total >= criticalLevel;
}

var warningStop = function(){
	return total >= warningLevel;
}

var notColorLevel = function(){
	if(total < warningLevel){
		return "warning"
	}
	else if(total < criticalLevel){
		return "danger"
	}

}

return {
		callSms: callsAndSms,
		call: totalCalls,
		sms: totalSms,
		grandTotal: totalCallAndSms,
		critical: criticalLevelFloat,
		warning: warningLevelFloat,
		floatCall: callFloat,
		floatSms: smsFloat,
		color: colorLevel,
		notColor: notColorLevel,
		stopCritical: criticalStop,
		stopWarning: warningStop
	}
}