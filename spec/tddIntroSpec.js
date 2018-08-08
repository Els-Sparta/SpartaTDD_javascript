describe("Intro to doing TDD in javascript", function(){

  var calculator = require("../lib/calcEngine");

  it("Should add two numbers together", function(){
    expect(calculator.addTwoNumber(3,2)).toEqual(5);
  })

  it("Should minus two numbers together", function(){
    expect(calculator.minusTwoNumber(6,2)).toEqual(4);
  })

  it("Should multiply two numbers together", function(){
    expect(calculator.multiplyTwoNumber(2,6)).toEqual(12);
  })

  it("Should divded two numbers together", function(){
    expect(calculator.divideTwoNumber(9,3)).toEqual(3);
  })

  it("Should do the power of num2 for num1", function(){
    expect(calculator.powerOfTwoNumber(2,3)).toEqual(8);
  })

  it("Should do the sqaure root of number 1", function(){
    expect(calculator.sqrtOfNumber(16)).toEqual(4);
  })

  it("Should work out the BMI using weight and height in metric", function(){
    expect(calculator.metricBMIcalculator(70,1.75)).toEqual(23);
  })

  it("Should work out the BMI using weight and heignt in imperial", function(){
    expect(calculator.imperialBMIcalculator(155,71)).toEqual(22);
  })

  it("Should work out the time taken for the trip", function(){
    expect(calculator.tripTime(100,50)).toEqual(2);
  })

  it("Should work out the cost of the trip", function(){
    expect(calculator.tripPrice(100,50,1)).toEqual(2);
  })

})
