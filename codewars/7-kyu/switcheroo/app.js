//Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

//P
//string

//R
//string with 'a' and 'b' switched

//E
// assert.strictEqual(switcheroo('abc'), 'bac');
// assert.strictEqual(switcheroo('aaabcccbaaa'), 'bbbacccabbb'); 
// assert.strictEqual(switcheroo('ccccc'), 'ccccc');

//P
//split
//map
  //conditional
    //replace
//join

function switcheroo(x){
    return x.split('').map((e) => {
      if (e === 'a') {
        return e.replace('a', 'b')
      } else if (e === 'b') {
        return e.replace('b', 'a')
      } else {
        return e
      }
    }).join('')
  }