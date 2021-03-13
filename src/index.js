
exports.min = function min (array) {
  if( !array || array.length == 0 ){
    return 0;
  }else{
    array.sort((a, b) => b - a).reverse();
    return array[0];
  }
  
}

exports.max = function max (array) {
  if( !array || array.length == 0){
    return 0;
  }else{
    array.sort((a, b) => b - a);
    return array[0];
  }
}

exports.avg = function avg (array) {
  if(!array || array.length == 0){
    return 0;
  }else{
    let sum = 0;
    for( let i = 0; i < array.length; i++ ){
      sum += parseInt( array[i], 10 );
    }
    let answer = sum/array.length;
    return answer;

  }
}
