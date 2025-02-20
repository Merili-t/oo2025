var Restoran = /** @class */ (function () {
    function Restoran(nimi) {
        this.nimi = nimi;
        this.raha = 0;
        this.menüü = { burger: 5, pizza: 8, salat: 4 };
    }
    Restoran.prototype.telli = function (toit) {
        if (!this.menüü[toit])
            return console.log(" ".concat(toit, " pole men\u00FC\u00FCs!"));
        this.raha += this.menüü[toit];
        console.log(" Klient tellis ".concat(toit, "-(i)t! Arve oli ").concat(this.menüü[toit], " \u20AC"));
    };
    Restoran.prototype.olek = function () {
        console.log(" ".concat(this.nimi, " |  arve: ").concat(this.raha, " \u20AC"));
    };
    return Restoran;
}());
// Kasutamine:
var minuRestoran = new Restoran("Maitseparadiis");
minuRestoran.olek();
minuRestoran.telli("burger");
minuRestoran.telli("pastat"); // Vale toit
minuRestoran.olek();
