document.addEventListener("DOMContentLoaded", function(){

	// Important DOM elements

	var settingsBillAddBtn = document.querySelector("button.button-primary.settingsBtn");
	var updateSettingsBtn = document.querySelector(".button-primary.updateSettings");
	var setCallsTotalElem = document.querySelector(".callTotalSettings");
	var setSmsTotalElem = document.querySelector(".smsTotalSettings");
	var totalElem = document.querySelector(".totalSettings");
	var updateBtn = document.querySelector(".updateSettings");
	var callCostInput = document.querySelector(".u-full-width.callCostSetting");
	var smsCostInput = document.querySelector(".u-full-width.smsCostSetting");
	var warningLevelSet = document.querySelector(".u-full-width.warningLevelSetting");
 	var criticalLevelSet = document.querySelector(".u-full-width.criticalLevelSetting");

	setCallsTotalElem.innerHTML = "0.00";
	setSmsTotalElem.innerHTML = "0.00";
	totalElem.innerHTML = "0.00";

	// Instance for Factory function
	var settingBillFunction = settingBill();

	// update button
	updateBtn.addEventListener("click", update)	

	


function update(){
	settingBillFunction.floatCall(callCostInput.value);
	settingBillFunction.floatSms(smsCostInput.value);
	settingBillFunction.warning(warningLevelSet.value);
	settingBillFunction.critical(criticalLevelSet.value);
}

// click button. 

settingsBillAddBtn.addEventListener("click", billAddBtn);

function billAddBtn(){

	var settingRadioBtn = document.querySelector("input[name='billItemTypeWithSettings']:checked");
	if (settingRadioBtn){
		var billSettingRadioBtn = settingRadioBtn.value;
		settingBillFunction.callSms(billSettingRadioBtn);

		setCallsTotalElem.innerHTML = settingBillFunction.call().toFixed(2);
		setSmsTotalElem.innerHTML = settingBillFunction.sms().toFixed(2);

		
		totalElem.innerHTML = settingBillFunction.grandTotal().toFixed(2);

		var colors = settingBillFunction.color();
		var notColors = settingBillFunction.notColor();
		var criticalStop = settingBillFunction.stopCritical();
		
		totalElem.classList.add(colors)
		totalElem.classList.remove(notColors)

		if(criticalStop){
			settingsBillAddBtn.disabled = true
		}

	}
}
});