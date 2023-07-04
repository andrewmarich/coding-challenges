//The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

//P
//array of pairs of numbers

//R
//array of strings

//E
//openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]]),['Open', 'Senior', 'Open', 'Senior']

//P
//map
  //ternary

function openOrSenior(data){
  return data.map((pair) => {
    return pair[0] >= 55 && pair[1] > 7 ? 'Senior' : 'Open'
   })
}