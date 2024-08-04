let result = document.getElementById('result');

function Result() {
	let num1 = result.value;
	let num2 = eval(num1);
	result.value = num2;
}


function Solve(val) {
	if (val == 'C') {
		result.value = ''; // clear the input box
	} else {
		result.value += val; // concatenate the value
	}
}


function Clear() {
	result.value = '';
}