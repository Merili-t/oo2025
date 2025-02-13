//Loo programmiga kolm takistit. Esimese takistus 110 oomi, teise takistus 220 oomi, kolmanda takistus 4700 oomi (ehk 4,7 kilooomi). 
// Arvuta iga takisti puhul vool 5-voldise pinge korral.
//Paiguta need kolm takistit massiivi. Rakenda igaühele pinge 5 volti, 
// liida kokku tekkivad voolud nagu juhtub rööpühenduse korral
var resistor = /** @class */ (function () {
    function resistor(r) {
        this.r = r;
        this.r = r;
    }
    resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    return resistor;
}());
var r1 = new resistor(220);
var r2 = new resistor(110);
var r3 = new resistor(4700);
console.log(r1.getCurrent(5)); //pinge on 5 volti
console.log(r2.getCurrent(5));
console.log(r3.getCurrent(5));
//leian massiivi
var resistors = [r1, r2, r3];
console.log(resistors);
//leian summa
var totalCurrent = r1.getCurrent(5) + r2.getCurrent(5) + r3.getCurrent(5);
console.log(totalCurrent);
