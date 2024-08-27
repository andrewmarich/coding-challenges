//Complete the method which accepts such an array, and returns that single different number.

//P
//odd length array of integers

//R
//returns single different number

//E
// assert.strictEqual(stray([1, 1, 2]), 2);
// assert.strictEqual(stray([1, 2, 1]), 2);
// assert.strictEqual(stray([2, 1, 1]), 2);

//P
//Number
  //filter
    //indexOf & lastIndexOf

function stray(numbers) {
  return Number(numbers.filter((e, i, a) => {
    return a.indexOf(e) === a.lastIndexOf(e)
  }))
}