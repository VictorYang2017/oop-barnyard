/**
 * Barnyard model.
 */
function BarnYard(){
    this.hens = [];
    this.farmer;

    this.addHen = function(hen){
        this.hens.push(hen);
    }
}