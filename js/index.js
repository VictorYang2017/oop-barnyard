// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
// }

// var car1 = new Car('Eagle', 'Talon TSi', 1993);

// console.log(car1.make);
document.addEventListener("DOMContentLoaded", function (event) {
      var NO_OF_HENS = 20;
      var ctrl = new BarnYardController();

      //initiate barn yard
      ctrl.initBarnYard(NO_OF_HENS);
      console.log('No of hens:', ctrl.barnYard.hens.length);

      //get profit
      var profit = ctrl.getProfit();
      console.log('Profit:', '$' + profit);
});

