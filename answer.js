let arr = [1,2,3]
function getLength(arr){
  //return length of arr
  return arr.length
}
function getFirst(arr){
  //return the first element of arr
  arr.shift()
  return arr
}
function getLast(arr){
  //return the last element of arr
  return arr.pop()
}
function pushElement(arr){
  var el=1;
  arr.push(el)
  return arr
}
function popElement(arr){
  arr.pop()
  return arr
}
