//Complete the function/method so that it returns the url with anything after the anchor (#) removed.

//P
//string

//R
//string with substring after # removed

//E
//removeUrlAnchor('www.codewars.com#about'), 'www.codewars.com'

//P
//ternary
//includes
//slice & indexOf

function removeUrlAnchor(url){
    return url.includes('#') ? url.slice(0, url.indexOf('#')) : url
  }