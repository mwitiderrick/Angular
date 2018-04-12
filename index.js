
angular.module('eits', ['EIT'])
  .controller('EitController', ['EitService',
  function EitController(EitService) {
    this.cy = new Date();
    this.getAge = function getAge(dob) {
    this.mil = this.cy - this.dob;
    this.years = Math.floor(this.mil / 3.154e+10);
    this.months = Math.floor((this.mil % 3.154e+10) / 2.628e+9);
    return this.years + 'year(s)  ' + this.months + 'months(s)';
      };
      
      this.getFullName = function getFullName(fname,lname){
        return this.fname + ' '+ this.lname;

      };
     

    }]).controller('ListController',['EitService',
      function ListController(EitService) {
        this.getEits = function getEits(){

      return EitService.eits;

      };

      this.showEIt = function showEit(eit){
        return EitService.showEIt;
      };

}]).controller('DetailsController',['EitService',
  function DetailsController(EitService) { 
    this.getEit = function(id){
      console.log(id);
      this.eit =  EitService.getEit(id);

    };

    this.eit =  function(){
      return EitService.getCurrentEit();
    }
}]).controller('AddEditController',['EitService',
  function AddEditController(EitService) { 
    this.fname;
    this.lname;
    this.dob;

    this.addEit = function addEit(){
       return EitService.addEit(this.fname, this.lname, this.dob, this.gender);
     };

}]);


