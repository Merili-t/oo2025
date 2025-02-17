//Leida endale meelepärane klassikomplekt ja kirjuta selle põhjal kood mille abil saab luua objekte ja teha nendega midagi huvitavat.
//Spetsiifilisel teemal klass koos kasutusnäidetega. 
// Mitmesugused sisendandmed, klassi funktsioonide kasutus. Massiiv klassi objektidest, massiivi kasutusnäide.

//virtuaalne lemmikloom
class Restoran {
    private raha: number = 0;
    private menüü = { burger: 5, pizza: 8, salat: 4 };
  
    constructor(public nimi: string) {}
  
    telli(toit: string) {
      if (!this.menüü[toit]) return console.log(` ${toit} pole menüüs!`);
      this.raha += this.menüü[toit];
      console.log(` Klient tellis ${toit}-(i)t! Restoran teenis ${this.menüü[toit]} €`);
    }
  
    olek() {
      console.log(` ${this.nimi} |  arve: ${this.raha} €`);
    }
  }
  
  // Kasutamine:
  let minuRestoran = new Restoran("Maitseparadiis");
  minuRestoran.olek();
  minuRestoran.telli("burger");
  minuRestoran.telli("pastat"); // Vale toit
  minuRestoran.olek();
  
