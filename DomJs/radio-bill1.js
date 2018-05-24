document.addEventListener('DOMContentLoaded', function(){


	var radioBillAddBtn = document.querySelector(".billItemTypeRadio");
	var radioBillAddBtn = document.querySelector("button.button-primary.radioBillAddBtn");
	var callTotalElem = document.querySelector(".callTotalTwo");
	var smsTotalElem = document.querySelector(".smsTotalTwo");
	var mainTotalElem = document.querySelector(".totalTwo");

	callTotalElem.innerHTML = "0.00";
	smsTotalElem.innerHTML = "0.00";
	mainTotalElem.innerHTML = "0.00";

	var radioButtonOne = radioButton();
	radioBillAddBtn.addEventListener("click", addBtn);	

	function addBtn(){

		var radioBtn = document.querySelector("input[name='billItemType']:checked");


		if (radioBtn){
	 	var billItemType = radioBtn.value;
	 	radioButtonOne.callSms(billItemType);

		callTotalElem.innerHTML = radioButtonOne.call().toFixed(2);
		smsTotalElem.innerHTML = radioButtonOne.sms().toFixed(2);
		
		mainTotalElem.innerHTML = radioButtonOne.grandTotal().toFixed(2);

		var colors = radioButtonOne.color();
		mainTotalElem.classList.add(colors);


	}


}
});
