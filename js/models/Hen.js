/**
 * Hen model.
 */
function Hen(){
    this.eggs = [];

    this.layEgg = function(weight, status){
        var egg = new Egg(weight, status);
        this.eggs.push(egg);
    }
}
