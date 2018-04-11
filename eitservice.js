angular.module('EIT', [])
.factory('EitService', function() {
	var currentEit = {};
	var eits = [];
	var counter = 0;

	var addEit = function(firstName, lastName,dob,gender) {

	eits.push({id:counter,firstName,lastName,dob,gender});
	counter = counter + 1;
	console.log(eits)

	};

	var getEit = function(id){
	var e = eits.find(eit => eit.id === id);
	setCurrentEit(e);
	return e;
	
	};

	var setCurrentEit = function(eit){
		currentEit = eit;
	};

	var getCurrentEit = function(){
		return currentEit;
	};

	return {
	setCurrentEit:setCurrentEit,
	getCurrentEit:getCurrentEit,
	addEit: addEit,
	eits : eits,
	getEit:getEit,
	currentEit:currentEit

	};
});