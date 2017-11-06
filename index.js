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
  let distance = Math.abs(start-end) * 264;
  return distance
}

function calculatesFarePrice(start, end) {
  distance = distanceTravelledInFeet(start,end)

}
