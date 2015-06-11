// Create a function that accepts any number of arrays as arguments
// and returns an array of the values that are present in every array

// Example: var result = sameValues([1, 2, 3 ,4], [1, 2, 3, 4, 5], [4, 2, 3, 8]);
//          console.log(result); --> [2, 3, 4]

var sameValues = function() {
  var result = [];
  var values = {};  // Object to store the values found in every array, we use an object to prevent duplicate values in result
  var isFound = true;  // Flag that stays true until one array doesn't contain the value being checked
  var value;

  // Check if there is more than one array passed in
  if(arguments.length > 1) {
    // Loop through the first array, we will check each value of the first array against all the other arrays
    for (var i = 0; i < arguments[0].length; i++) {
      value = arguments[0][i];  // The current element of the first array
      // Loop through each of the arrays except the first array
      for (var j = 1; j < arguments.length; j++) {
        // If isFound is false, one array is missing the value and so isFound will remain false until we check a new value
        if (arguments[j].indexOf(value) === -1) {  // If the value is not contained within the array, indexOf will return -1
          isFound = false;
          break;  // Stop looping as soon as one array does not contain the value
        }
      }
      if(isFound) {
        values[value] = value;  // Push the value into values object if it is found within all arrays
      }
      isFound = true;  // Reset isFound for the next value
    }

    // Create a result array from values object
    for (var key in values) {
      result.push(values[key]);
    }
  // If only one array is passed in, return that array
  } else if (arguments.length === 1) {
    result = arguments[0];
  }

  return result;
};

// Return an array of the first n elements of an array.
// If n is undefined, return just the first element.
var first = function(array, n) {
  // This is a ternary operator, it is the same as:
  /* if(n === undefined){
       return array[0]
     } else {
       return array.slice(0, n);
     }
  */
  return n === undefined ? array[0] : array.slice(0, n);
};

// Like first, but for the last elements.
// If n is undefined, return just the last element.
var last = function(array, n) {
  if(n === undefined) {
    return array[array.length - 1];
  }
  return array.slice(-n);
}

