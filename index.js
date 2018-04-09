(function(angular) {
  'use strict';
angular.module('eits', ['EIT'])
  .controller('EitController', ['EitService',function EitController(EitService) {
  this.cy = new Date();
  this.fname;
  this.lname;
  this.dob;
  
    this.getAge = function getAge(dob) {
      this.mil = this.cy - this.dob;
      this.years = Math.floor(this.mil / 3.154e+10);
      this.months = Math.floor((this.mil % 3.154e+10) / 2.628e+9);
     

      return this.years + 'yea(rs)  ' + this.months + 'months(s)';

    };
    
    this.getFullName = function getFullName(fname,lname){
      
      return this.fname + ' '+ this.lname;

    };
   
   this.addEit = function addEit(){
     return EitService.addEit(this.fname, this.lname);
   };

  this.getEits = function getEits(){

    return EitService.eits;

    };

  }]);
})(window.angular);

