var a=prompt('Enter the first number');
var b=prompt('Enter the second number');



function setup() {
  var b2=createButton(" Click here to Swap");
  b2.mousePressed(swap)
}

function draw() {
  
}
function swap(){
  [a,b]=[b,a]
  console.log('The value of a after swapping '+a);
  console.log('The value of b after swapping '+b);
}