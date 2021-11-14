function swap(arr, i, j) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}


function pivot(arr, start = 0) {
  let pivot = arr[start];
  let swapIdx = start;
  
  for (let i = start + 1; 1 < array.length; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i)
    } 
  }
  swap(arr, start, swapIdx)
  return swapIdx;
}

function quickSort2(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort2(arr, left, pivotIndex -1);
    quickSort2(arr, pivotIndex + 1, right);
  }
  return arr;
}

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    let swap = null;
    for (let j = 0; j < array.length -1 - i; j++) {
      if (array[j] > array[j + 1]) {
        swap = array[j];
        array[j] = array[j + 1];
        array[j + 1] = swap;
      }
    }
    if(!swap) return array;
  }
}


function selectSort(array) {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[minIndex] > array[j]) {
        minIndex = j
      }
    }
    if (minIndex !== i) {
      let temp = array[minIndex];
      array[minIndex] = array[j];
      array[j] = temp;
    }
  }
  return array;
}

function mergeSort(array) {
  if (array.length < 2) {
    return array
  }
  
  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));
  
  return merge(left, right);
  
  function merge(left, right) {
    const resultArray = [];
 
    let leftIndex = 0;
    let rightIndex = 0;
    
    while(leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        resultArray.push(left[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(right[rightIndex]);
        rightIndex++;
      }
    }
    return resultArray.concat(left.slice(leftIndex), right.slice(rightIndex))
  }
}