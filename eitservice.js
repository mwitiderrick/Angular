angular.module('EIT', [])
.factory('EitService', function() {
  
  var eits = [];

  var addEit = function(firstName, lastName) {
      eits.push({firstName,lastName});
      console.log(eits)
  };

  return {
    addEit: addEit,
    eits : eits
  };

});