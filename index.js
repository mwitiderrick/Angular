(function(angular) {
  'use strict';
angular.module('eits', [])
  .controller('EitController', function EitController() {
  this.cy = new Date();
  
    this.getAge = function getAge(dob) {
      this.mil = this.cy - dob;
      this.years = Math.floor(this.mil / 3.154e+10);
      this.months = Math.floor((this.mil % 3.154e+10) / 2.628e+9);
     

      return this.years + 'year(s)  ' + this.months + 'months(s)';

    };
    
    this.getFullName = function getFullName(fname,){
      
      return fname + lname;

    };
   
  });
})(window.angular);

