//The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

//P
//string

//R
//object containing number of occurences of each character

//E
// test('', {});
// test('a', {'a': 1});
// test('ab', {'a': 1, 'b': 1});
// test('aba', {'a': 2, 'b': 1});
// test('ABC', {'A': 1, 'B': 1, 'C': 1});

//P
//empty obj
//for loop
//return obj

function count(string) {
    let obj = {}
    for (let i = 0; i < string.length; i++) {
      obj[string.charAt(i)] = obj[string.charAt(i)] + 1 || 1
    }
    return obj
  }