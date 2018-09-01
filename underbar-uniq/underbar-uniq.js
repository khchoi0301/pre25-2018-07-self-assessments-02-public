var _ = {};

(function() {

  // Produce a duplicate-free version of the array.
  _.uniq = function(array) {
    
    var newArr=[]
    for(var i=0;i<array.length;i++){
      if(!(newArr.includes(array[i]))){
        newArr.push(array[i])
      }
    }
//    console.log(newArr);
    return newArr
  };

}).call(this);
