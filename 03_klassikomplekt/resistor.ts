//Loo programmiga kolm takistit. Esimese takistus 110 oomi, teise takistus 220 oomi, kolmanda takistus 4700 oomi (ehk 4,7 kilooomi). 
// Arvuta iga takisti puhul vool 5-voldise pinge korral.
//Paiguta need kolm takistit massiivi. Rakenda igaühele pinge 5 volti, 
// liida kokku tekkivad voolud nagu juhtub rööpühenduse korral
class resistor {
    constructor(protected r: number) { 
    this.r= r;
    }

    getCurrent(u: number): number {
        return u / this.r;
    }
}

let r1: resistor = new resistor(220);
let r2: resistor = new resistor(110);
let r3: resistor = new resistor(4700);

console.log(r1.getCurrent(5));   //pinge on 5 volti
console.log(r2.getCurrent(5));
console.log(r3.getCurrent(5));
//leian massiivi
let resistors: resistor[] = [r1, r2, r3];
console.log(resistors);
//leian summa
let totalCurrent = r1.getCurrent(5) + r2.getCurrent(5) + r3.getCurrent(5);
console.log(totalCurrent);

