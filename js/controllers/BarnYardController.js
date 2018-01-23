/**
 * Barnyard controller.
 */
function BarnYardController() {
    this.barnYard;

    /**
     * Create a barn yard
     */
    this.initBarnYard = function (noOfHens) {
        this.barnYard = new BarnYard();
        //add hens to the barn yard
        for (var i = 0; i < noOfHens; i++) {
            this.barnYard.addHen(new Hen());
        }

        //randomly make hens lay eggs
        var randNoOfLayingHens = Math.floor(Math.random() * noOfHens) + 1;
        var hens = this.barnYard.hens;
        //loop through random number of hens
        for (var i = 0; i < randNoOfLayingHens; i++) {
            //pick a random hen
            var randHenIndex = Math.floor(Math.random() * randNoOfLayingHens);
            //create a random egg health status (zero for unhealthy, one for healthy)
            var randEggHealthStatus = Math.round(Math.random());
            //create a random weight (a value between 100 & 200)
            var randEggWeight = 100 + (Math.random() * 100);
            //lay egg
            hens[randHenIndex].layEgg(randEggWeight, randEggHealthStatus);
        }
    }

    /**
     * Work out profit for the day
     */
    this.getProfit = function () {
        var hens = this.barnYard.hens;
        //hard-coded value, represents the current market value of eggs
        var marketValue = 0.7;
        var grossProfit = 0;
        //get eggs of each hen
        for (var i = 0; i < hens.length; i++) {
            var eggs = hens[i].eggs;
            //get each egg
            for (var j = 0; j < eggs.length; j++) {
                var egg = eggs[j];
                //if egg is healthy
                if(egg.status === 1){
                    grossProfit += egg.weight * marketValue;
                }
            }
        }
        return grossProfit.toFixed(2);
    }
}