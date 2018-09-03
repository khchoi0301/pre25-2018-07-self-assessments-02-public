
  // Extend a given object with all the properties of the passed in
  // object(s).
  //
  // Example:
  /*
    var obj1 = {key1: "something"};
     _.extend(obj1, {
      key2: "something new",
      key3: "something else new"
    }, {
      bla: "even more stuff"
    }); // obj1 now contains key1, key2, key3 and bla
*/
var _ = {};

(function() {
  _.extend = function(obj) {
      var arr=Array.prototype.slice(arguments)
      var newObj=arguments[0]
      //console.log(arr,obj,arguments)

      for(var i=0; i<arguments.length;i++){
        for(var key in arguments[i]){
          newObj[key]=arguments[i][key]
        }
      }
      return newObj
  };

}).call(this);
