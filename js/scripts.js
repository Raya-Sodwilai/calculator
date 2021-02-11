function add(number1, number2) {
	return number1 + number2;
};

function subtract(number1, number2) {
	return number1 - number2;
};

function multiply(number1, number2) {
	return number1 * number2;
};

function divide(number1, number2) {
	return number1 / number2;
};

$(document).ready(function() {
	$("form#add").submit(function(event) {
		event.preventDefault();
		const number1 = parseInt($("#add1").val());
		const number2 = parseInt($("#add2").val());
		const result = add(number1, number2);
		$("#add-output").text(result);
	});

	$("form#subtract").submit(function(event) {
		event.preventDefault();
		const number3 = parseInt($("#subtract3").val());
		const number4 = parseInt($("#subtract4").val());
		const result = subtract(number3, number4);
		$("#sub-output").text(result);
	});

	$("form#multiply").submit(function(event) {
		event.preventDefault();
		const number5 = parseInt($("#multiply5").val());
		const number6 = parseInt($("#multiply6").val());
		const result = multiply(number5, number6);
		$("#multi-output").text(result);	
	});

	$("form#divide").submit(function(event) {
		event.preventDefault();
		const number7 = parseInt($("#divide7").val());
		const number8 = parseInt($("#divide8").val());
		const result = divide(number7, number8);
		$("#div-output").text(result);	
	});
});
