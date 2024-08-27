//Given two numbers and an arithmetic operator (the name of it, as a string), return the result of the two numbers having that operator used on them.

//P
//two nums, operator as string

//R
//result of two nums given operator

//E
// assert.strictEqual(arithmetic(1, 2, "add"), 3, "'add' should return the two numbers added together!");
// assert.strictEqual(arithmetic(8, 2, "subtract"), 6, "'subtract' should return a minus b!");
// assert.strictEqual(arithmetic(5, 2, "multiply"), 10, "'multiply' should return a multiplied by b!");
// assert.strictEqual(arithmetic(8, 2, "divide"), 4, "'divide' should return a divided by b!");

//P
//switch

function arithmetic(a, b, operator){
    switch (operator) {
        case "add":
          return a + b;
          break;
        case "subtract": 
          return a - b;
          break;
        case "multiply": 
          return a * b;
          break;
        case "divide": 
          return a / b;
          break;
    }
  }