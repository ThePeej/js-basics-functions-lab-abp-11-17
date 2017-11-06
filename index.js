// Code your solution in this file!
const HQ = 42;

function distanceFromHqInBlocks(location) {
  let distance = Math.abs(location-HQ);
  return distance
}

function distanceFromHqInFeet(location) {
  return distanceFromHqInBlocks(location) * 264
}

function distanceTravelledInFeet(start, end) {
  console.log(end-start)
  console.log(start-end)
  let distance = Math.abs(end-start) * 264;
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start,end)
  
}
