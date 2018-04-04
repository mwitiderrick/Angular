<!doctype html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Example - example-guide-concepts-1-production</title>


  <script src="//code.angularjs.org/snapshot/angular.min.js"></script>



</head>

<body>
  <div ng-app>
    <b>EIT Details:</b>
    <div>
      First Name:
      <input type="text" min="0" ng-model="fname">
    </div>

    <div>
      Last Name:
      <input type="text" min="0" ng-model="lname">
    </div>

    <div>
      DOB:
      <input type="date" min="0" ng-model="dob">
    </div>
    <div>
      Gender:
      <input type="text" min="0" ng-model="gender">
    </div>
    <div>
      <b>EIT Details:</b> </br>First Name: {{fname}}</br> Last Name: {{lname}} </br> DOB:{{dob | date}} </br>Gender:{{gender}}
      <br> Full Name: {{ fname + lname}} </br> Age: {{ dob ? 2018 - (dob | date:"y") : ''}}
    </div>
  </div>
</body>

</html>
