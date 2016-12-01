angular.module("goldModule", [])
  .controller("Gold", goldController)

 function goldController() {
  
   var gold = this;
  
  gold.clickX = 0;
  gold.clickY = 0;
  gold.coordinates = [];
  
  gold.goldClick = function(event) {
    
    gold.place = {
      coordinateX : gold.clickX = (event.pageX - 25),
      coordinateY : gold.clickY = (event.pageY - 25),
    }
    
    gold.coordinates.push(gold.place);
    console.log(gold.coordinates)
    console.log(event)
  }
  
  gold.goldRemove = function(index) {
    gold.coordinates.splice(index, 1)
  }
  
}