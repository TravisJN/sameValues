// Create a function that accepts any number of arrays as arguments
// and returns an array of the values that are present in every array

// Example: var result = sameValues([1, 2, 3 ,4], [1, 2, 3, 4, 5], [4, 2, 3, 8]);
//          console.log(result); --> [2, 3, 4]

var sameValues = function() {
  var result = [];
  var values = {};
  var isFound = true;

  if(arguments.length > 1) {
    for (var i = 0; i < arguments[0].length; i++) {
      var value = arguments[0][i];
      for (var j = 1; j < arguments.length; j++) {
        var oneArray = arguments[j];
        if (isFound && oneArray.indexOf(value) !== -1) {
          isFound = true;
        } else {
          isFound = false;
        }
      }
      if(isFound) {
        values[value] = value;
      }
      isFound = true;
    }

    for (var key in values) {
      result.push(values[key]);
    }
  } else if (arguments.length === 1) {
    result = arguments[0];
  }

  return result;
};
