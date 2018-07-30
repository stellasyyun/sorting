
const merging = {};

merging.split = function(wholeArray) {
  if (wholeArray.length < 2) return wholeArray;
  let midPt = Math.floor(wholeArray.length / 2);
  const firstHalf = wholeArray.slice(0, midPt);
  const secondHalf = wholeArray.slice(midPt);
  return [firstHalf, secondHalf];
}

merging.merge = function(firstArr, secondArr) {
  let mergedArr = [];
  while (firstArr.length > 0 && secondArr.length > 0) {
    if (firstArr[0] > secondArr[0]) {
      mergedArr.push(secondArr.shift());
    }
    else {
      mergedArr.push(firstArr.shift());
    }
  }
  if (firstArr.length > 0) mergedArr = mergedArr.concat(firstArr);
  else if (secondArr.length > 0) mergedArr = mergedArr.concat(secondArr);
  return mergedArr;
}

merging.mergeSort = function(array) {
  if (array.length > 1){
    let splitted = merging.split(array);
    return merging.merge(merging.mergeSort(splitted[0]), merging.mergeSort(splitted[1]));
  } else {
    return array;
  }
}
