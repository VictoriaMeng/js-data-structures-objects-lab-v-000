// Write your solution in this file!
const driver = {};
function updateDriverWithKeyAndValue(driver, key, value){
  const newObj = {};
  newObj[key] = value;
  return {...driver, ...newObj};
}
