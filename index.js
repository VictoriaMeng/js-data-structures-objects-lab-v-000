// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {};
  newObj[key] = value;
  return {...driver, ...newObj};
}
function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return driver[key] = value;
}
