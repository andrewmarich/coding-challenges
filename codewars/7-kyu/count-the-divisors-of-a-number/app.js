//Count the number of divisors of a positive integer n.

//P
//positive integer n

//R
//count of divisors

//E
//getDivisorsCnt(1),  1);
//getDivisorsCnt(10), 4);
//getDivisorsCnt(11), 2);
//getDivisorsCnt(54), 8);

//P
//count var
//conditional
  //n === 1 return 1
  //n % Math.sqrt(n) === 0 count++
//for loop
  //count += 2
//return count

function getDivisorsCnt(n) {
  let count = 0
  if (n === 1) return 1
  if (n % Math.sqrt(n) === 0) count++
  for (let i = 1; i < Math.sqrt(n); i++) {
    if (n % i === 0) {
      count += 2
    }
  }
  return count
}