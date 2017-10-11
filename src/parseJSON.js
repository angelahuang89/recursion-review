// this is what you would do if you were one to do things the easy way:
// var parseJSON = JSON.parse;

// but you're not, so you'll write it from scratch:
var parseJSON = function(json) {
  //number
  if (!isNaN(Number(json))) {
    return Number(json);
  }
  //string
  var arr = json.split('');
  if ( arr[0] === '\"') {
    return arr.slice( 1, arr.length - 1 ).join('');
  }
  //boolean
  if (json === 'true') {
    return true;
  }
  if (json === 'false') {
    return false;
  }
  //null
  if (json === 'null') {
    return null;
  }
  //array
  if ( arr[0] === '[') {
    var arrSpl = arr.slice( 1, arr.length - 1 ).join('');
    var result = arrSpl.split(',');
    for (var i = 0; i < result.length; i++) {   
      result[i] = parseJSON(result[i]);
    }
    return result;
  }   
  //object
};
