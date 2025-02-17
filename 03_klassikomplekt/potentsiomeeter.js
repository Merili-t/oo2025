//takistuse leidmine?
var Potentsiomeeter = /** @class */ (function () {
    function Potentsiomeeter(nurkMin, nurkMax, rMin, rMax) {
        this.nurkMin = nurkMin;
        this.nurkMax = nurkMax;
        this.rMin = rMin;
        this.rMax = rMax;
        this.nurk = nurkMin;
    }
    Potentsiomeeter.prototype.muudaNurk = function (delta) {
        var uusNurk = this.nurk + delta;
        if (uusNurk < this.nurkMin) {
            throw new Error("Nurk on liiga väike");
        }
        if (uusNurk > this.nurkMax) {
            throw new Error("Nurk on liiga suur");
        }
        this.nurk = uusNurk;
    };
    Potentsiomeeter.prototype.getR = function () {
        return this.rMin + (this.rMax - this.rMin) * (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
    };
    return Potentsiomeeter;
}());
var pot1 = new Potentsiomeeter(0, 270, 10, 100);
pot1.muudaNurk(90);
console.log(pot1.getR());
