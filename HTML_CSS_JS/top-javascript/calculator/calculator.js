//function add () {
var add = function(param1, param2){
	var sum = param1 + param2;

	return sum;
}

//function subtract () {
var subtract = function(param1, param2){
	var sum = param1 - param2;

	return sum;
}

//function sum () {
var sum = function(param1){
	var sum = 0;

	for(var i = 0; i < param1.length; i++){
		sum += param1[i];
	}

	return sum;
}

//function multiply () {
var multiply = function(param1){
	var sum = param1[0];

	for(var i = 1; i < param1.length; i++){
		var sum = sum * param1[i];
	}

	return sum;
}

//function power() {
var power = function(param1, param2){
	var sum = param1;
	var cycles = param2;

	for(var i = 1; i < cycles; i++){
		sum = sum * param1;
	}

	return sum;
}

//function factorial() {
var factorial = function(param1){
	var sum =  param1;

	// First check if we were passed a 0, which will
	// always return a 1;
	if(sum == 0){
		return 1;
	}

	for(var i = 1; i < param1; i++){
		sum = sum * (param1 - i);
	}

	return sum;
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}