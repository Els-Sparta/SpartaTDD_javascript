describe("Intro to doing TDD in javascript", function(){

  var calculator = require("../lib/calcEngine");

  it("Should add two numbers together", function(){
    expect(calculator.addTwoNumber(3,2)).toEqual(5);
  })

})
