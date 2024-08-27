//Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

//P
//array of strings

//R
//count of smileys

//E
// assert.strictEqual(countSmileys([]                             ), 0);
// assert.strictEqual(countSmileys([':D',':~)',';~D',':)']        ), 4);
// assert.strictEqual(countSmileys([':)',':(',':D',':O',':;']     ), 2);
// assert.strictEqual(countSmileys([';]', ':[', ';*', ':$', ';-D']), 1);

//P
//filter
  //regex
//test
//length

function countSmileys(arr) {
    return arr.filter(char => /^[:;][-~]?[)D]$/.test(char)).length
}