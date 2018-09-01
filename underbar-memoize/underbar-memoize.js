
  // Memorize an expensive function's results by storing them. You may assume
  // that the function takes only one argument and that it is a primitive.
  // memoize could be renamed to oncePerUniqueArgumentList; memoize does the
  // same thing as once, but based on many sets of unique arguments.
  //
  // _.memoize should return a function that, when called, will check if it has
  // already computed the result for the given argument and return that value
  // instead if possible.

var _ = {};

(function() {

  _.memoize = function(func) {
    var cache = {}

    return function(){
      var arg = Array.prototype.slice.call(arguments)
      var stringArg = JSON.stringify(arg)
      //console.log(arg,stringArg);

      if(!(stringArg in cache)){
        console.log('func called')
        var result = func.apply(this,arg);
        cache[stringArg]=result;          
        return result;
      } else {
        return cache[stringArg]
      }    
    }

  };

}).call(this);
