/********
Given Data
********/
function Person(employee) {
  this.name = employee[0];
  this.employeeNum = employee[1];
  this.salary = employee[2];
  this.rating = employee[3];
};



var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

for (var i = 0; i < employees.length; i++) {
  employees[i] = new Person(employees[i])
}

/******************************************************************************
function that takes in one employee array as argument and returns another array
******************************************************************************/
function bonusArray(employee) {
  var percentBonus = bonusPercentage(employee);
  var totalComp = parseInt(employee.salary) + (percentBonus*parseInt(employee.salary));
  var roundedBonus = Math.round(parseInt(employee.salary) * percentBonus);
  return [employee.name, (percentBonus*100) +"%", "$" + totalComp, "$" + roundedBonus];
}

/*************************
Calculate bonus percentage
*************************/
function bonusPercentage(employee) {
  var bonusPercentage = 0;
  if (employee.rating <= 2) {
    bonusPercentage = 0;
  } else if (employee.rating == 3) {
    bonusPercentage = .04
  } else if (employee.rating == 4) {
    bonusPercentage = .06;
  } else if (employee.rating == 5) {
    bonusPercentage = .1;
  } //if employee rating meets above conditions, do that math...

  if (employee.employeeNum.length == 4) {
    bonusPercentage += .05
  } //if employee # is 4 digits long, add 5%

  if (parseInt(employee.salary) > 65000) {
    bonusPercentage -= .01;
  } //if income > 65000, subtract 5%

  if (bonusPercentage > .13) {
    bonusPercentage = .13;
  } //if bonus > 13%, change to 13%

  if (bonusPercentage < 0) {
    bonusPercentage = 0;
  } //if bonus < 0%, change to 0%
  return bonusPercentage;
}


var arrayList = document.getElementById("arrayList");

for (var i = 0; i < employees.length; i++) {
  var resultArray = (bonusArray(employees[i])) //create var and assign bonus array to
  var tr = document.createElement("TR"); //create trable row variable for <tr> element in html
  for (var j = 0; j < resultArray.length; j++) { //loop through each index of result array and:
    var td = document.createElement("TD"); //create table data variable for <td> element in html
    var textnode = document.createTextNode(resultArray[j]); //create textnode var and make an html text node
    td.appendChild(textnode); //append textnode to <td>
    tr.appendChild(td); //append table date to <tr>
  }
  arrayList.appendChild(tr); //append table row as a child of html element with ID arrayList
  console.log(resultArray);
}
