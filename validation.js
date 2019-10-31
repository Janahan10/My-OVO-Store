
var itemPrices = new Array();
itemPrices["tshirt"] = 35.00;
itemPrices["hoodie"] = 50.00;
itemPrices["polo"] = 20.00;
itemPrices["tank"] = 25.00;

/*
function getItemPrice(){
	var itemPrice = 0;
	
	var shirt = document.getElementById("tshirt");
	var hood = document.getElementById("hoodie");
	var pol = document.getElementById("polo");
	var tank = document.getElementById("tankTop");

	if(shirt.checked == true){
		//alert("T-Shirt was selected, the price of this item is: $" + itemPrices["tshirt"]);
		itemPrice = itemPrices["tshirt"];
		return itemPrice*getQuantity("quantity")*getSize();
	} else if(hood.checked == true){
		//alert("Hoodie was selected, the price of this item is: $" + itemPrices["hoodie"]);
		itemPrice = itemPrices["hoodie"];
		return itemPrice*getQuantity("quantity1");
	} else if(pol.checked == true){
		//alert("Polo was selected, the price of this item is: $" + itemPrices["polo"]);
		itemPrice = itemPrices["polo"];
		return itemPrice*getQuantity("quantity2");
	} else if(tank.checked == true){
		//alert("Tank top was selected, the price of this item is $" + itemPrices["tank"]);
		itemPrice = itemPrices["tank"];
		return itemPrice*getQuantity("quantity3");
	}
}
*/

function shirtPrice(){
	return itemPrices["tshirt"]*getQuantity("quantity")*getSize("sizeOfProduct");
}
function hoodiePrice(){
	return itemPrices["hoodie"]*getQuantity("quantity2")*getSize("sizeOfProduct2");
}
function poloPrice(){
	return itemPrices["polo"]*getQuantity("quantity3")*getSize("sizeOfProduct3");
}
function tankPrice(){
	return itemPrices["tank"]*getQuantity("quantity4")*getSize("sizeOfProduct4");
}

function getQuantity(quant){
	var theForm = document.forms["orderForm"];
	var n = 0;
	var q = 0;
	var q = theForm.elements[quant];
	n = q.value;
	var itemQuantity = parseInt(n);
	return itemQuantity;
}

function getSize(size){
	var theForm = document.forms["orderForm"];
	var s = 0;
	var q = 0;
	var q = theForm.elements[size];
	s = q.value;
	var sizePrice = parseInt(s);
	return sizePrice;
}

function calculateTotal(){
	var total = 0;
	var theForm = document.forms["orderForm"];

	var totalDisplay = document.getElementById('totalLabel');
	var totalAfterTax = document.getElementById('total');
	
	totalDisplay.style.display = 'block';
	totalAfterTax.style.display = 'block';

	total = shirtPrice() + hoodiePrice() + poloPrice() + tankPrice();
	
	if(isNaN(total)){
		total = 0;
	}

	totalDisplay.innerHTML = "SUBTOTAL = $" + total.toFixed(2);
	var taxedTotal = (total*0.13) + total;
	totalAfterTax.innerHTML = "TOTAL AFTER TAX = $" + taxedTotal.toFixed(2);

}

function validateForm(){

	var theForm = document.forms["orderForm"];

	var exMonthCat = document.getElementById("months");
	var exMonth = exMonthCat.options[exMonthCat.selectedIndex].value;

	var exYearCat = document.getElementById("exyear");
	var exYear = exYearCat.options[exYearCat.selectedIndex].value;

	var exConCat = document.getElementById("country");
	var con = exYearCat.options[exYearCat.selectedIndex].value;


	var fname = theForm.elements['firstName'].value;
	var lname = theForm.elements['lastName'].value;
	var	cardN = theForm.elements['cardNum'].value;
	var cvv = theForm.elements['cvv'].value;
	var strAddress = theForm.elements['streetAddress1'].value;
	var city = theForm.elements['city'].value;
	var stateProvince = theForm.elements['statPro'].value;
	var posCode = theForm.elements['postal'].value;
	var email = theForm.elements['email'].value;
	var date = document.getElementById('date').value;

	if(fname == "" || fname == null){
		alert("First Name must be filled out");
		return false;
	}
	if(lname == "" || lname == null){
		alert("Last Name must be filled out");
		return false;
	}
	if(cardN == "" || cardN == null){
		alert("Card Number must be filled out");
		return false;
	}
	if(isNaN(cardN)){
		alert("Card Number is suppose to be a Number");
		return false;
	} 
	if(cvv == "" || cvv == null){
		alert("CVV must be filled out");
		return false;
	}
	if(isNaN(cvv)){
		alert("CVV is suppose to be a Number");
		return false;
	}
	if(exMonth == 0){
		alert("Please select Expiry Month");
		return false;
	}
	if(exYear == 0){
		alert("Please select Expiry Year");
		return false;
	}
	if (strAddress == "" || strAddress == null){
		alert("Address must be filled out");
		return false;
	}
	if (city == "" || city == null){
		alert("City must be filled out");
		return false;
	}
	if (stateProvince == "" || stateProvince == null){
		alert("State/Province must be filled out");
		return false;
	}
	if (posCode == "" || posCode == null){
		alert("Postal Code must be filled out");
		return false;
	}
	if (posCode == "" || posCode == null){
		alert("Postal Code must be filled out");
		return fals
	}
	if(con == 0){
		alert("Please select Country");
		return false;
	}
	if (email == "" || email == null){
		alert("Email must be filled out");
		return false;
	}
	if (date == null){
		alert("Date is undefined, please select delivery date");
	}	
}

function clearAll(){
	document.getElementById("orderForm").reset();
	var totalDisplay = document.getElementById('totalLabel');
	var totalAfterTax = document.getElementById('total');

	totalDisplay.innerHTML = "SUBTOTAL = $0.00";
	totalAfterTax.innerHTML = "TOTAL AFTER TAX = $0.00";
}
