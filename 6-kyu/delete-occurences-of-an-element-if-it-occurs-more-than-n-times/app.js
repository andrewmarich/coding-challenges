//Given a list and a number, create a new list that contains each number of list at most N times, without reordering.

//P
//array of num and max occurences n

//R
//new array with max occurences n

//E
// assert.sameOrderedMembers(deleteNth([20,37,20,21], 1), [20,37,21])
// assert.sameOrderedMembers(deleteNth([1,1,3,3,7,2,2,2,2], 3), [1, 1, 3, 3, 7, 2, 2, 2])

//P
//empty obj
//filter

function deleteNth(arr,n){
    let obj = {}
    return arr.filter(e => {
      obj[e] = (obj[e] + 1) || 1
      return obj[e] <= n
    })
  }