//Complete function saleHotdogs/SaleHotDogs/sale_hotdogs, function accepts 1 parameter:n, n is the number of hotdogs a customer will buy, different numbers have different prices (refer to the following table), return how much money will the customer spend to buy that number of hotdogs.

//P
//num, whole, +
  
//R
//return num
  
//E

saleHotdogs(1) //100
saleHotdogs(5) //475
saleHotdogs(10) //900
  
//P
//ternary operator
//conditionals n < 5, n < 10, n >= 10
//return num

function saleHotdogs(n){
  return n < 5 ? n * 100 : n < 10 ? n * 95 : n * 90
}