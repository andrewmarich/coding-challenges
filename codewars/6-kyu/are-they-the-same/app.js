//Given two arrays a and b write a function comp(a, b) (orcompSame(a, b)) that checks whether the two arrays have the "same" elements, with the same multiplicities (the multiplicity of a member is the number of times it appears). "Same" means, here, that the elements in b are the elements in a squared, regardless of the order.

//P
//two arrays of num

//R
//boolean whether arrays share multiplicity

//E
//let a1 = [121, 144, 19, 161, 19, 144, 19, 11];
//let a2 = [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19];
  //comp(a1, a2), true

//P
//count var
//falsy conditional
//sort arr1 and sort/map arr2
//for loop
//return count

function comp(array1, array2){
    let count = 0
    if (!array1 || !array2) return false
    array1 = array1.sort((a,b) => a-b)
    array2 = array2.sort((a,b) => a-b).map(element => {
      return Math.sqrt(element)
    })
    for (let i = 0; i < array1.length; i++) {
      if (array1[i] === array2[i]) {
        count++
      }
    }
    return count === array1.length
  }