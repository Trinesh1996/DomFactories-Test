	//
	// var button = document.querySelector("button.button-primary.calculateBtn");
	// var data = document.querySelector('.billString');
	// var billTotalElement = document.querySelector('.billTotal');
	//
	// button.addEventListener('click', calculateBtnClick);

	function calculateBtnClick(data){
		var billItems = data.split(",");

		var billTotal = 0;

		for (var i=0; i<billItems.length; i++){
		var bills = billItems[i].trim();

		if (bills === "call"){
			billTotal += 2.75;
		}
		else if (bills ==="sms"){
			billTotal += 0.65;
		}
	}
	return billTotal.toFixed(2);
}
	//
	// function bill(){
	//
	// var result = calculateBtnClick(billTotal)
	//
	// 	var totalCost = billTotal.toFixed(2);
	// 	billTotalElement.innerHTML = totalCost;
	//
	// 	if (totalCost >= 20){
	// 		billTotalElement.classList.add("warning");
	// 	}
	//
	// 	if (totalCost >= 30){
	// 		billTotalElement.classList.add("danger");
	// 	}
	//
	// 	if (totalCost <= 20){
	// 		billTotalElement.classList.remove("warning");
	// 	}
	//
	// 	if (totalCost <= 30){
	// 		billTotalElement.classList.remove("danger");
	// 	}
	//
	// }
