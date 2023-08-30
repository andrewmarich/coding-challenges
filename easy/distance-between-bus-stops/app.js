/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */

//reduce

var distanceBetweenBusStops = function(distance, start, destination) {
    let totalDistance = distance.reduce((a,b) => a+b, 0)
    let clockwiseDistance = 0

    let beginning = Math.min(start, destination)
    let end = Math.max(start, destination)

    for (let i = beginning; i < end; i++) {
        clockwiseDistance += distance[i]
    }

    let counterclockwiseDistance = totalDistance - clockwiseDistance

    return Math.min(clockwiseDistance, counterclockwiseDistance)
};