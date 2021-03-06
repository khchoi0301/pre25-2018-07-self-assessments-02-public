var _ = {};

(function() {  
  // Return the results of applying an iterator to each element.
  _.map = function(collection, iterator) {
    var newArr=[]
    for(var i=0;i<collection.length;i++){
      newArr.push(iterator(collection[i]))
    }
    return newArr
  };

}).call(this);

    // map() is a useful primitive iteration function that works a lot
    // like each(), but in addition to running the operation on all
    // the members, it also maintains an array of results.