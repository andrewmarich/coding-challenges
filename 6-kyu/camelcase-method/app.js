//Write a method (or function, depending on the language) that converts a string to camelCase, that is, all words must have their first letter capitalized and spaces must be removed.

//P
//string

//R
//string to CamelCase

//E
// assert.strictEqual("test case".camelCase(), "TestCase");
// assert.strictEqual("camel Case method".camelCase(), "CamelCaseMethod");
// assert.strictEqual("say hello".camelCase(), "SayHello");
// assert.strictEqual("camel case word".camelCase(), "CamelCaseWord");
// assert.strictEqual("".camelCase(), "");

//P
//split
//map
  //charAt & toUpperCase
  //slice
//join

String.prototype.camelCase=function(){
    return this.split(' ').map((e) => {
      return e.charAt(0).toUpperCase() + e.slice(1)
    }).join('')
  }