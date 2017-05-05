var displayTable = document.querySelector(".displayTable");
var searchButt = document.querySelector(".searchButt");
var displayButt = document.querySelector(".displayButt");
var myTemplate = document.querySelector(".myTemplate");
var template = Handlebars.compile(myTemplate.innerHTML);

var tableTemplate = document.querySelector(".tableTemplate");
var tableTemp = Handlebars.compile(tableTemplate.innerHTML);
var objectForOnlyTowns = [{town1: "Cape town"},
                           {town2: "East london"},
                           {town3: "Alice"},
                           {town4: "Fort Beaufort"}];

var townObj =  [{town: "CapeTown",      Time:"13:00", Price:"R500"},
                {town: "East london",   Time:"14:00", Price:"R600"},
                {town: "Alice",         Time:"15:00", Price:"R400"},
                {town: "Fort Beaufort", Time:"16:00", Price:"R300"}];

var Arrival  =   [{town: "CapeTown",      Time:"13:00", Price:"R500"},
                  {town: "East london",   Time:"14:00", Price:"R600"},
                  {town: "Alice",         Time:"15:00", Price:"R400"},
                  {town: "Fort Beaufort", Time:"16:00", Price:"R300"}];


(function(){
  displayButt.innerHTML = template({radioBut: objectForOnlyTowns})

})()

searchButt.addEventListener("click", function(){
displayTable.innerHTML = tableTemp({townList: townObj,townList: Arrival})
});
