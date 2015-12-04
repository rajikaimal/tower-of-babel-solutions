var rawArgs = process.argv.slice(2);
var args = [];

rawArgs.forEach(val => {
  let commaSep = val.split(',');
  commaSep.forEach(val => {
    if(val !== '') args.push(+val);
  });
});

var avg = function(...args) {
  let sum = 0;
  args.reduce((currentVal,previousVal) => {
    return sum = currentVal+previousVal;
  });
  let avg = sum/(args.length)
  return avg;
};

console.log(avg(...args));