//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. 
// kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
// Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, 
// mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.

import { convertCompilerOptionsFromJson } from "typescript";

class Resistor {
    r: number = 0;
    maxPower: number = 0;

    constructor(r: number, maxPower: number) {
        this.r = r;
        this.maxPower = maxPower;
    }

    getCurrent(u: number): number {
        return u / this.r;
    }

    getPower(u: number): number {
        return u * this.getCurrent(u);
    }

    isPowerAllowed(u: number): boolean {
        return this.getPower(u) <= this.maxPower;
    }
}

let r1 = new Resistor(220, 0.5);
let r2 = new Resistor(220, 0.25);

console.log(r1.getCurrent(5));
console.log(r1.isPowerAllowed(10)); 
;

let rs: Resistor[] = [r1, r2];
let v1: Resistor[] = [];
for (let r of rs) {
    if (r.isPowerAllowed(10)) {
        v1.push(r);
    }
}
console.log(v1);