// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  //undefined and functions
  if (typeof obj === 'function' || obj === undefined) {
    return;   
  }
  //array
  if ( Array.isArray(obj) ) {

    //recurssion case
    obj = obj.map(function (arr) {
      return stringifyJSON(arr);
    });
    
    return '[' + obj + ']';
    
  }
  //object
  if ( typeof obj === 'object' ) {
    if (obj === null) {
      return '' + obj + '';
    }
    var strObj = [];
    
    for ( let key in obj ) {
      if ( typeof obj[key] === 'function' || obj[key] === undefined) {
        return '{}';
      }
      if ( typeof key === 'object' ) {
        return stringifyJSON(key);
      }
      strObj.push(stringifyJSON(key) + ':' + stringifyJSON(obj[key]));
    }  
    return '{' + strObj.join(',') + '}';
  }
  //string, boolean, number
  if (typeof obj === 'string') {
    //return obj;
    return '\"' + obj + '\"';
  }
  
  if ( typeof obj === 'boolean' ) {
    return '' + obj + '';
  }
  
  if ( typeof obj === 'number' ) { 
    return '' + obj + '';
  }
};
