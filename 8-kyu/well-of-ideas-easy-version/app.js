//In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

//P
//array of strings called x

//R
//1-2 good ideas, return 'Publish!'
//>2 good ideas, return 'I smell a series!'
//0 good ideas, return 'Fail!'

//E
well(['bad', 'bad', 'bad']) //'Fail!'
well(['good', 'bad', 'bad', 'bad', 'bad']) //'Publish!'
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']) //'I smell a series!'

//P
//count variable
//loop & conditional
//ternary opertor
//return string

function well(x){
  let count = 0
  for (let i = 0; i <= x.length; i++) {
    if (x[i] === 'good') {
      count ++
    }
  }
  return count > 2 ? 'I smell a series!' : count > 0 ? 'Publish!' : 'Fail!'
}