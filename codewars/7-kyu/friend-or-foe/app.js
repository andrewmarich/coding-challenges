//Make a program that filters a list of strings and returns a list with only your friends name in it.

//P
//array of strings

//R
//array of strings that are 4 letters long

//E
//friend(["Ryan", "Kieran", "Mark"]), ["Ryan", "Mark"]
//friend(["Ryan", "Jimmy", "123", "4", "Cool Man"]), ["Ryan"]
//friend(["Love", "Your", "Face", "1"]), ["Love", "Your", "Face"]

//P
//filter

function friend(friends){
    return friends.filter(friend => friend.length === 4)
  }