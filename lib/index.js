// function console(){


// Ask the User what calculator they would like to use
alert("What Calculator do you need?");
var calc_choice = prompt("(b)asic, (a)dvnaced, (i)bmi or (t)rip");
// If the input is 'b' the basic calculator prompt is run
if(calc_choice=="b"){
  alert("Basic Calculator");
// Giving the code information so a basic calculation can be made
  var num1=parseInt(prompt("Enter a value", "0"));
  var operator=prompt("Enter an operator","eg. +, -, * or /");
  var num2=parseInt(prompt("Enter a value", "0"));
// Using switch to differentiate between the different operators
  switch(operator){
    case "+" :
      alert(addTwoNumber(num1, num2));
      break;
    case "-" :
      alert(minusTwoNumber(num1, num2));
      break;
    case "*" :
      alert(multiplyTwoNumber(num1, num2));
      break;
    case "/" :
      alert(divideTwoNumber(num1, num2));
      break;
    default:
      alert("Incorrect input");
  }
  // console();
}
// If the input is 'a' the advanced calculator prompt is run
else if(calc_choice=="a"){
  alert("Advanced Calculator");
// Asking the user if they would like to use the Power / Square root funtion
  operator=prompt("Would you like the (p)ower or (s)quare root of initial input");
// Using switch to differentiate between the different operators
  switch (operator) {
    case "p":
      num1=parseInt(prompt("Enter a value", "0"));
      num2=parseInt(prompt("Enter a value", "0"));
      alert(powerOfTwoNumber(num1, num2));
      break;
    case "s":
      num1=parseInt(prompt("Enter a value", "0"))
      alert(sqrtOfNumber(num1));
      break;
    default:
      alert("Incorrect input");
  }
}
// if the input is "i" the BMT calculator prompt is run
else if(calc_choice=="i"){
  alert("BMI Calculator");
// Give the user an option to choose from metric or imperial
  operator=prompt("Would you like to use (m)etric or (i)mperial")
// // Using switch to differentiate between the different units
  switch (operator) {
    case "m":
// Give the user a prompt to give the calculator an input for weight in kg and height in m
      var weight = parseFloat(prompt("Enter your weight in kg", "0"));
      var height = parseFloat(prompt("Enter your height in m", "0"));
      // var metric_bmi_function = (weight/height) / height;
      alert(metricBMIcalculator(weight, height));
      break;
// Give the user a prompt to give the calculator an input for weight in pounds and height in inches
    case "i":
      weight = parseFloat(prompt("Enter your weight in pounds", "0"));
      height = parseFloat(prompt("Enter your weight in inches", "0"));
      // var imperial_bmi_function = ((weight * 703)/height)/height;
      alert(imperialBMIcalculator(weight, height));
      break;
    default:
      alert("Incorrect input")
  }
}
// if the input is "t" the trip calculator prompt is run
else if(calc_choice=="t"){
  alert("Trip Calculator");
// Ask the user to provide details of distance, fuel efficiency, cost/gallon and average speed.
  var distance = parseFloat(prompt("Enter the distance of the trip in miles", "0"))
  var fuel_efficiency = parseFloat(prompt("Enter your cars MPG", "0"))
  var cost_per_gallon = parseFloat(prompt("Enter the cost of fuel per gallon in pounds", "0"))
  var average_speed = parseFloat(prompt("Enter your average speed for the trip in m/h"))

  // Tell the user in one message the time taken for the trip in hours and the cost of the trip in pounds. Call the functions from calcEngine.js file
    alert("The time taken for the trip in hours: " + tripTime(distance, average_speed) + "\n" + " The cost of the trip in £: " + tripPrice(distance, fuel_efficiency, cost_per_gallon));
  }
// }
