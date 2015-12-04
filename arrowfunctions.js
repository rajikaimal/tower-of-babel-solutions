var inputs = process.argv.slice(2);
var result = inputs.map((input)=>{
	return input[0];
}).reduce((previousValue, currentValue)=>{
	return previousValue += currentValue;
});
console.log(result);