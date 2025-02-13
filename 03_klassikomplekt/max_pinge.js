"use strict";
//Loo käsk kontrollimaks, kas parameetrina antud pinge on vastava takisti puhul lubatud - st. 
// kas pingestamisel eralduv võimsus jääb lubatud maksimuvõimsuse piiresse
// Koosta takistitest massiiv. Koosta funktsioon, mis loob uue massiivi takistitest, 
// mille lubatud võimsus jääb etteantud pinge korral lubatud piiresse.
Object.defineProperty(exports, "__esModule", { value: true });
var Resistor = /** @class */ (function () {
    function Resistor(r, maxPower) {
        this.r = 0;
        this.maxPower = 0;
        this.r = r;
        this.maxPower = maxPower;
    }
    Resistor.prototype.getCurrent = function (u) {
        return u / this.r;
    };
    Resistor.prototype.getPower = function (u) {
        return u * this.getCurrent(u);
    };
    Resistor.prototype.isPowerAllowed = function (u) {
        return this.getPower(u) <= this.maxPower;
    };
    return Resistor;
}());
var r1 = new Resistor(220, 0.5);
var r2 = new Resistor(220, 0.25);
console.log(r1.getCurrent(5));
console.log(r1.isPowerAllowed(10));
;
var rs = [r1, r2];
var v1 = [];
for (var _i = 0, rs_1 = rs; _i < rs_1.length; _i++) {
    var r = rs_1[_i];
    if (r.isPowerAllowed(10)) {
        v1.push(r);
    }
}
console.log(v1);
