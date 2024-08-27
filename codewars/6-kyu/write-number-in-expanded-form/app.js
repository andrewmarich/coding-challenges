//You will be given a number and you will need to return it as a string in Expanded Form. For example:

//P
//whole num greater than zero

//R
//string in "expanded form"

//E
// assert.strictEqual(expandedForm(12), '10 + 2');
// assert.strictEqual(expandedForm(42), '40 + 2');
// assert.strictEqual(expandedForm(70304), '70000 + 300 + 4');

//P
//String num
//empty arr
//for loop
  //continue if num[i] == 0
  //else push num[i] plus repeated zeroes
//join arr

function expandedForm(num) {
    num = String(num)
    let arr = []
    for (let i = 0; i < num.length; i++) {
      if (num[i] == 0) continue
      else arr.push(num[i] + '0'.repeat(num.length-i-1)) 
    }
    return arr.join(' + ')
  }