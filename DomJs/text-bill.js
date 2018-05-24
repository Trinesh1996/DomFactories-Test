document.addEventListener('DOMContentLoaded', function(){

	var textBillAddBtn = document.querySelector(".addToBillBtn");
	var billText = document.querySelector(".billTypeText");
	var callsTotalElem = document.querySelector(".callTotalOne");
	var smsTotalElem = document.querySelector(".smsTotalOne");
	var totalElem = document.querySelector(".totalOne");

	callsTotalElem.innerHTML = "0.00";
	smsTotalElem.innerHTML = "0.00";
	totalElem.innerHTML = "0.00";

	var text = textBill();


	function textAdd(){

		var billInfo = billText.value.trim();

		text.callSms(billInfo)

		callsTotalElem.innerHTML = text.call().toFixed(2);
		smsTotalElem.innerHTML = text.sms().toFixed(2);
		totalElem.innerHTML = text.total().toFixed(2);

		var color = text.color();
		totalElem.classList.add(color);
	}

		textBillAddBtn.addEventListener('click', function(){
		textAdd()
		billText.innerHTML = ''

		});

});



