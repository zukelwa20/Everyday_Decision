var displayTable = document.querySelector(".displayTable");
var search = document.querySelector(".searchButt");
var displayButt = document.querySelector(".displayButt");
var submitBut = document.querySelector(".submitBut");



var tableTemplate = document.querySelector(".tableTemplate");
var tableTemp = Handlebars.compile(tableTemplate.innerHTML);

var myTemplate = document.querySelector(".myTemplate");
var template = Handlebars.compile(myTemplate.innerHTML);

var WeekFlights = [{ day: "monday", time: "13H00", town: "East london"},
                  { day: "Tuesday", time :  "14H00", town: "Queenstown"},
                  { day: "Wenesday", time: "15H00", town: "Alice"},
                  { day: "thursday", time: "16H00", town: "PE"},
                  { day: "Friday", time:"17H00", town: "Durban"}]



search.addEventListener("click", function(){
displayTable.innerHTML = tableTemp({townList: WeekFlights})
});

(function(){
 displayButt.innerHTML = template({day: WeekFlights,
                                   time: WeekFlights,
                                  town: WeekFlights})
})()

var stored = document.querySelector(".stored")
submitBut.addEventListener("click", function(){
//  alert("hi");
var dayClass = document.querySelector(".dayClass");
var timeCLass = document.querySelector(".timeCLass");
var townClass = document.querySelector(".townClass");

var selectedDay = dayClass.value;
var selectedTime = timeCLass.value;
var selectedTown = townClass.vlue;

function dayFilter(input){
  return input.day == selectedDay;
}
function timeFilter(input){
  return input.time == selectedTime;
}
function townFilter(input){
  return input.town == selectedTown;
}
if(selectedDay !==""){
  var newFlight = WeekFlights.filter(dayFilter);
}
if(selectedTime !==""){
  if(selectedDay !==""){
  var newFlight = newFlight.filter(timeFilter);
}
else{
var newFlight = WeekFlights.filter(townFilter);
}
}
if(selectedTime !==""){
  if(selectedDay !=="" || selectedTown !==""){
    var newFlight = newFlight.filter(timeFilter);
  }
  else{
    var newFlight = WeekFlights.filter(timeFilter);
  }
}

stored.innerHTML = tableTemp({townList: newFlight})
})
