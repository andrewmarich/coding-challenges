//Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

//P
//array of integer pairs

//R
//return num of people still on bus

//E
//number([[10,0],[3,5],[5,8]]),5

//P
//find the difference of each array using map
//add the differences using reduce and return

var number = function(busStops) {
  let difference = busStops.map(array => {
    return array[0] - array[1]
  })
  return difference.reduce((a,b) => a+b,0)
}