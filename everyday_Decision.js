var displayButt = document.querySelector(".displayButt");
var myTemplate = document.querySelector(".myTemplate");
var template = Handlebars.compile(myTemplate.innerHTML);

var seasonObjs = [{season1: "Winter"},
                 {season2: "Summer"},
                 {season3: "Springs"},
                 {season4: "Automn"}];
(function(){
  displayButt.innerHTML = template({one: seasonObjs})
})()
