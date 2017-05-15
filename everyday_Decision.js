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

var townObj =  [{town: "CapeTown",      date: "03/05/20017", Time:"13:00", Price:"R500"},
                {town: "East london",   date: "04/05/2017" , Time:"14:00", Price:"R600"},
                {town: "Alice",         date: "05/05/2017" , Time:"15:00", Price:"R400"},
                {town: "Fort Beaufort", date: "06/05/2017" , Time:"16:00", Price:"R300"}];

// var Arrival  =   [{town: "CapeTown",     Time:"13:00", Price:"R500"},
//                   {town: "East london",   Time:"14:00", Price:"R600"},
//                   {town: "Alice",         Time:"15:00", Price:"R400"},
//                   {town: "Fort Beaufort", Time:"16:00", Price:"R300"}];


// (function(){
//   displayButt.innerHTML = template({radioBut: objectForOnlyTowns})
//
// })()
//
// searchButt.addEventListener("click", function(){
//   displayTable.innerHTML = tableTemp({townList: townObj})
// });
var dateClass = document.querySelector(".dateClass");
var timeClass = document.querySelector(".timeClass");
var capeClass = document.querySelector(".capeClass");
var eastClass = document.querySelector(".eastClass");
var aliceClass = document.querySelector(".aliceClass");
var fortClass = document.querySelector(".fortClass");
var allButton = document.querySelector(".allButton");

var Filter=[];
allButton.addEventListener("click", function(){
 for (var i = 0; i < objectForOnlyTowns.length; i++) {
     var dataList = objectForOnlyTowns[i];
     if(capeClass === dataList.town1 || capeClass === dataList.town1
      && eastClass === dataList.town2 || eastClass === dataList.town2
      && aliceClass === dataList.town3 || aliceClass === dataList.town3
      && fortClass === dataList.town4 || fortClass === dataList.town4){
       Filter.push(dataList);
    }
}
displayButt.innerHTML = template({townList:objectForOnlyTowns})
});

// var allRadio = document.querySelector(".allRadio");
// var selectedRadio = allRadio.value;
// allRadio.addEventListener("click", function(){
//
//   function selectedRadio(input){
//     return input.selectedRadio;
//   }
// })
