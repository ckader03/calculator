function input(button){
document.calc.display.value += button.value;
}

function clearDisplay(){
  document.calc.display.value = "";
}

function enter(){
  document.calc.display.value = eval(document.calc.display.value);
}



function average(){
  var sum = 0;

  listOfNums = document.calc.display.value.split(',');

for(var i =0; i< listOfNums.length; i++){
  sum += parseInt(listOfNums[i]);
}


var average = sum/listOfNums.length;

document.calc.display.value = average;
}



