const bubble = {};

bubble.count = 0;

bubble.bubbleSort = function(arr) {
  let looping = true;
  while (looping){
    let origArr = arr.slice();
    for (let i = 0; i < arr.length - 1; i++) {
      bubble.sort(arr, i, i + 1);
    }
    if ( origArr.join('') === arr.join('') ) looping = false;
  }
  return arr;
}

bubble.sort = function(arr, index1, index2) {
  //doesn't return anything, just modifies array
  if (arr[index1] > arr[index2]) {
    const tempVal = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = tempVal;
  }
}
