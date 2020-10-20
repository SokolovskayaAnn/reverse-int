module.exports = function reverse (n) {
  let splitString = Math.abs(n) + "";
  return Number(splitString.split("").reverse().join("")); 
}
