function kehamassiindeks(cm, kg) {
    var m = cm / 100;
    return kg / (m * m);
}
console.log(kehamassiindeks(173, 63));
var massid = [65, 55, 60, 70];
for (var _i = 0, massid_1 = massid; _i < massid_1.length; _i++) {
    var mass = massid_1[_i];
    console.log(kehamassiindeks(173, mass));
}
var indeksid = massid.map(function (mass) { return kehamassiindeks(173, mass); });
console.log(indeksid);
//looge valem kehamassiindeksi arvutamiseks
//1,3 korda kehakaal jagatud pikkusega astmes 2,5
//aitab käsklus math.pow
function kehm(cm, kg) {
    var n = cm / 100; //muudan cm to meetriteks
    return 1.3 * kg / Math.pow(n, 2.5); // väljastan kehamassiindeksi
}
console.log(kehm(173, 63));
var indeks = massid.map(function (mass) { return kehm(173, mass); });
console.log(indeks);
//arvutage kehamassiindeks mitmesuguste pikkustega, sama massi juures
//näidake, kuidas väärtused erinevad
var vastus = [];
for (var pikkus = void 0; pikkus < 190; pikkus += 2) {
    vastus.push([pikkus, kehamassiindeks(pikkus, 90), kehm(pikkus, 90)]);
}
console.log(vastus);
