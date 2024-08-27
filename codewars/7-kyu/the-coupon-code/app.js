//Your online store likes to give out coupons for special occasions. Some customers try to cheat the system by entering invalid codes or using expired coupons.

//P
//string

//R
//boolean

//E
//checkCoupon('123','123','September 5, 2014','October 1, 2014'), true
//checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false

//P
//Date.parse
//ternary

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    let parseCurrent = Date.parse(currentDate)
    let parseExpiration = Date.parse(expirationDate)
    return (enteredCode === correctCode) && (parseCurrent <= parseExpiration) ? true : false
  }