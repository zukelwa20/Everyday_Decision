var displayTable = document.querySelector(".displayTable");
var searchButt = document.querySelector(".searchButt");
var displayButt = document.querySelector(".displayButt");
var myTemplate = document.querySelector(".myTemplate");
var template = Handlebars.compile(myTemplate.innerHTML);

var tableTemplate = document.querySelector(".tableTemplate");
var tableTemp = Handlebars.compile(tableTemplate.innerHTML);

var townObj =  [{town1: "CapeTown", Time:"13:00", Price:"R500"},
                {town2: "East london", Time:"14:00", Price:"R600"},
                {town3: "Alice", Time:"15:00", Price:"R400"},
                {town4: "Fort Beaufort", Time:"16:00", Price:"R300"}];
(function(){
  displayButt.innerHTML = template({radioBut: townObj})
})()


searchButt.addEventListener("click", function(){
displayTable.innerHTML = tableTemp({townList: townObj})
})
