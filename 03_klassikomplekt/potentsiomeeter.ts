//takistuse leidmine?

class Potentsiomeeter {
    protected nurk: number;

    constructor(protected nurkMin: number, protected nurkMax: number, protected rMin: number, protected rMax: number) {
        this.nurk = nurkMin;
    }

    muudaNurk(delta: number): void {
        let uusNurk = this.nurk + delta;
        if (uusNurk < this.nurkMin) {
            throw new Error("Nurk on liiga väike");
        }
        if (uusNurk > this.nurkMax) {
            throw new Error("Nurk on liiga suur");
        }
        this.nurk = uusNurk;
    }

    getR(): number {
        return this.rMin + (this.rMax - this.rMin) * (this.nurk - this.nurkMin) / (this.nurkMax - this.nurkMin);
    }
}
let pot1: Potentsiomeeter = new Potentsiomeeter(0, 270, 10, 100);
pot1.muudaNurk(90);
console.log(pot1.getR());
