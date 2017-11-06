// Code your solution in this file!
const HQ = 42;

function distanceFromHqInBlocks(location) {
  let distance = Math.abs(location-HQ);
  return distance
}

function distanceFromHqInFeet(location) {
  let blocks = distanceFromHqInBlocks()
  console.log(blocks)
  return blocks*264
}
